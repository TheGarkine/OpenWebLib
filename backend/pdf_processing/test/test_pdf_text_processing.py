import unittest
import os, sys, subprocess
sys.path.append('../src/')
import pdf_parser

class TestPDFTextProcessingFunctions(unittest.TestCase):
    def test_language_detection(self):
        # detect_language(sample_text)
        self.assertEqual(pdf_parser.detect_language("Eins, zwei, drei, vier"), "deu")


    def test_english_language_detection(self):
        # detect_language(sample_text)
        self.assertEqual(pdf_parser.detect_language("One, two, three, four"), "eng")


    def test_german_text_extraction(self):
        german_test_text = open("test_files/german_test_file.txt", "r", encoding="utf8").read()
        # extract_pdf_text(file_path)
        extracted_german_text = pdf_parser.extract_pdf_text("test_files/german_test_file.pdf")
        self.assertEqual(extracted_german_text, german_test_text)


    def test_english_text_extraction(self):
        english_test_text = open("test_files/english_test_file.txt", "r", encoding="utf8").read()
        # extract_pdf_text(file_path)
        extracted_english_text = pdf_parser.extract_pdf_text("test_files/english_test_file.pdf")
        self.assertEqual(extracted_english_text, english_test_text)


if __name__ == '__main__':
    unittest.main()