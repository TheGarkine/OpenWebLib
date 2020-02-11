# -*- encoding: utf-8 -*-
#!/usr/bin/python
import json
import os


def save_textfile(text_list, filename):
    '''
    This function saves the created corpus into the file system as a txt-file
    The following directory will be used to save the corpus:
        /text-preparation/out/<filename>.txt
    '''

    file_handler = open("/text_prep_worker/out/" + filename, "w")
    for sentence in text_list:
        file_handler.write(sentence + "\n")
    file_handler.close()


def remove_local_files(path):
    text_prep_in_files = os.listdir(path)
    for file in text_prep_in_files:
        os.remove(path + file)


def process_file(file_type, resource_uuid, minio_client, log_file_handler):
    '''
    This function is called, in order to open the received filename of the API.
    All files which need to be processed are saved within:
        /text-preparation/in/<resource_uuid>/source
    The following file types are supported:
        - PDF
        - Docx
        - HTML
        - txt
        - PNG or JPG
    '''
    text_prep_input = "/text_prep_worker/in/"
    text_prep_output = "/text_prep_worker/out/"
    file_path = text_prep_input + resource_uuid

    # Step 1: Checks whether the requested bucket exist
    existance_result_in = does_bucket_exist(minio_client, minio_buckets["RESOURCE_BUCKET"])
    if not existance_result_in[0]:
        log_file_handler.write("While processing the received task, the following error has occurred: \n")
        log_file_handler.write("###################################################################### \n")
        log_file_handler.write(existance_result_in[1] + "\n")
        return existance_result_in

    log_file_handler.write("A request was send towards the MinIO-server to check whether the {} bucket exist. Response was positive. Processing continues. \n".format(minio_buckets["RESOURCE_BUCKET"]))

    # Step 2: Downloads the needed file which is located within the texts-in bucket
    download_result = download_from_bucket(minio_client, minio_buckets["RESOURCE_BUCKET"], resource_uuid + "/source", file_path)
    if not download_result[0]:
        log_file_handler.write("While processing the received task, the following error has occurred: \n")
        log_file_handler.write("###################################################################### \n")
        log_file_handler.write(download_result[1] + "\n")
        return download_result

    log_file_handler.write("Download of {}/{} was successfull \n".format(minio_buckets["RESOURCE_BUCKET"], resource_uuid + "/source"))

    # Step 3: Process the downloaded file
    #         After processing the corpus is ready
    full_text = ""
    try:
        if file_type == "pdf":
            full_text = pdf_parser(file_path, log_file_handler)
        elif file_type == "docx":
            full_text = word_parser(file_path, log_file_handler)
        elif file_type == "html":
            full_text = html_parser(file_path, log_file_handler)
        elif file_type == "txt":
            full_text = text_parser(file_path, log_file_handler)
        elif file_type == "png" or file_type == "jpg":
            full_text = ocr_parser(file_path, log_file_handler)
        else:
            log_file_handler.write("While trying to parse the downloaded file, the following error has occurred: \n")
            log_file_handler.write("###################################################################### \n")
            log_file_handler.write("The given file type is not supported. Task failed. \n")
            return (False, "Given file type is not supported. Task failed")

        log_file_handler.write("Parsing of the file finished successfully. \n")
        log_file_handler.write("Starting to create the corpus file. \n")
        # Generates the corpus
        corpus = generate_corpus(full_text)
        log_file_handler.write("Creation of the corpus file finished successfully \n")

    except Exception as e:
        log_file_handler.write("While processing the received task, the following error has occurred: \n")
        log_file_handler.write("###################################################################### \n")
        log_file_handler.write("Failed to parse the received file. Task failed. \n")

        print(e)
        return (False, "Failed to parse the received file")

    # Step 4: Save corpus locally
    try:
        log_file_handler.write("Trying to save the corpus file locally \n")
        corpus_name = resource_uuid + "_corpus"
        save_textfile(corpus, corpus_name)
        log_file_handler.write("Successfully saved the corpus file \n")
    except:
        log_file_handler.write("While processing the received task, the following error has occurred: \n")
        log_file_handler.write("###################################################################### \n")
        log_file_handler.write("Failed to save the corpus file \n")
        return (False, "Failed to save the corpus file")

    # Step 5: Upload corpus in bucket
    log_file_handler.write("Trying to upload the corpus file into its corresponding MinIO-bucket \n")
    corpus_path = text_prep_output + corpus_name
    corpus_upload_result = upload_to_bucket(minio_client, minio_buckets["RESOURCE_BUCKET"], resource_uuid + "/corpus.txt", corpus_path)

    if not corpus_upload_result[0]:
        log_file_handler.write("While processing the received task, the following error has occurred: \n")
        log_file_handler.write("###################################################################### \n")
        log_file_handler.write(corpus_upload_result[1] + "\n")
        return corpus_upload_result

    log_file_handler.write("Successfully uploaded the corpus file. Corpus is located within {} in the {} MinIO-bucket.\n".format(resource_uuid + "/corpus.txt", minio_buckets["RESOURCE_BUCKET"]))

    # Step 6: Remove local files
    remove_local_files(text_prep_input)
    remove_local_files(text_prep_output)

    return (True, "The task was successfully processed.")


def infinite_loop():
    _, task_queue, status_queue, minio_client = parse_args('Text-Preparation-Worker Connector', task_queue='Text-Prep-Queue')


    for data in task_queue.listen():
        print("Received the following task from Text-Prep-Queue: ")
        print(data)
        task = None

        try:
            task = TextPrepTask(**data)

            print("Starting to process the received task")
            #TODO: Add status update that new task is now processed
            return_value = process_file(task.file_type, task.resource_uuid, minio_client)

            # If the task was successfully processed, the if-statement is executed
            # Otherwise, the status queue is updated to: failure
            if return_value[0]:
                #TODO: Add successfully finished task in status-queue                
                pass
            else:
                #TODO: Add failed task in status-queue
                pass

        except Exception as e:
            # TODO: ADD status update for status-queue in redis if something went wrong
            raise e

if __name__ == "__main__":
    print("Worker for document processing is running")
    infinite_loop()
    print("Worker for document processing stops running")
