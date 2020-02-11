import PyPDF2
import pytesseract
from pdf2image import convert_from_path
import tempfile
from langdetect import detect # Documentation: https://pypi.org/project/langdetect/


def detect_language(sample_text):
    lang = detect(sample_text)
    print("Detected language: {}".format(lang))
    return "deu" if lang == "de" else "eng"


def extract_pdf_text(file_path):
    print("Starting to transform the received PDF-file into JPG-files")
    with tempfile.TemporaryDirectory() as path:
        # Converts all pages of the PDF-file into JPG-files
        images = convert_from_path(file_path, output_folder=path, dpi=300, fmt=".jpg")
        print("Finished transforming the PDF-file into image-files")
        # Detects which language is used within the PDF-file
        print("Trying to detect whether the PDF is written in English or German")
        orc_language = detect_language(pytesseract.image_to_string(images[0], lang="eng"))

        # Iterates through all images and retrieves the text
        print("Starting to process the image-files with the OCR-scanner")
        full_text = ""
        for image in images:
            print("Starting to process: {}".format(image))
            text = pytesseract.image_to_string(image, lang=orc_language)
            full_text += text + "\n"
            print("Finished processing of {}".format(image))
            print("--------------------------------------")
        print("All images are processed successfully")
    return full_text


