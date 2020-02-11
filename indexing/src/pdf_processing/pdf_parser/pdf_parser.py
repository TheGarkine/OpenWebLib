import PyPDF2
import pytesseract
from pdf2image import convert_from_path
import tempfile


def extract_pdf_text(file_path):

    # Converts all pages of the PDF-file into JPG-files
    print("Starting to transform the received PDF-file into JPG-files")
    with tempfile.TemporaryDirectory() as path:
        images = convert_from_path(file_path, output_folder=path, dpi=300, fmt=".jpg")
            
        print("Finished transforming the PDF-file into image-files")

        # Iterates through all images and retrieves the text
        print("Starting to process the image-files with the OCR-scanner")
        full_text = ""
        for image in images:
            print("Starting to process: {}".format(image))
            text = pytesseract.image_to_string(image, lang="eng")
            full_text += text + "\n"

        print("Finished finished processing of {}".format(image))
        print("--------------------------------------")
    return full_text


# Problem: OCR-Scanner ist in der Lage alle möglichen Texte zu parsen, jedoch muss er wissen in welcher Sprache der Text verfasst ist
# Das Problem hierbei ist nicht die Sprache zu erkennen, sondern alle möglichen Sprachmodelle installiert zu haben. Es sind ziemlich viele
# Auf welche Sprachen wollen wir uns beschränken?
# Dokumentation: https://pypi.org/project/langdetect/
#from langdetect import detect, detect_langs
#lang1 = detect("Ein, zwei, drei, vier")
#lang2 = detect("One two three four")