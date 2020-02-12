'''
    TODO: Implement the workflow for one uploaded PDF-file
            6) Index all words of the PDF
    TODO: Merge all functions of the PDF-Parser into one file
'''
import sys
import os
import pdf_parser


def prepare_processing(filename, needed_directory):
    '''        
        The needed directory structure for the received Redis task is created
    '''
    if not os.path.exists(needed_directory):
        print("Needed directory does not exist. Creating directory!")
        os.mkdir(needed_directory)
        os.mkdir(needed_directory + "/images")
    else:
        print("Needed directory already exists. Processing continues")


if __name__ == "__main__":
    # Step 0 Define all needed variables
    relative_path = sys.argv[1]
    filename = sys.argv[2]
    ending = sys.argv[3]
    directory = "/home/dino/Desktop/OpenWebLib/backend/pdf_processing/test/testarea/" + filename
    file_path = relative_path + filename + "." + ending

    # Step 1 Connect to Redis queue
    #TODO: Add redis connection
    # Step 2 Receive tasks from Redis
    #TODO: Add task receiving
    # Step 3 Download neede file from MinIO storage
    #TODO: Add file download from MinIO

    # Step 4 create all needed directories
    prepare_processing(filename, directory)
    # Step 5 extract all images
    pdf_parser.extract_images_from_pdf(file_path, directory + "/images", filename)
    # Step 6 create thumbnail image
    pdf_parser.save_title_page(file_path, filename + "_thumbnail", directory)
    # Step 7 extract the text
    pdf_text = pdf_parser.extract_pdf_text(file_path)
    # Step 8 start indexing
    print("Indexing of the PDF-file starts")
    pdf_parser.index_file_text(pdf_text)
    print("Indexing finished")