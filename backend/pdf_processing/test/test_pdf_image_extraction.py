import unittest
import os, sys
sys.path.append('/home/dino/Desktop/OpenWebLib/backend/pdf_processing/src/')
import pdf_parser

class TestPDFImageExtractionFunctions(unittest.TestCase):

    def test_number_of_extracted_images(self):
        # extract_images_from_pdf(file_path, save_path, filename)
        if not os.path.exists("testdir"):
            os.mkdir("testdir")
        pdf_parser.extract_images_from_pdf("/home/dino/Desktop/OpenWebLib/backend/pdf_processing/test/test_files/learning.pdf", "testdir", "test")
        self.assertEqual(len(os.listdir("testdir/")), 14)

    def test_thumbnail_existance(self):
        # save_title_page(file_path, save_name, save_path)
        pdf_parser.save_title_page("/home/dino/Desktop/OpenWebLib/backend/pdf_processing/test/test_files/learning.pdf", "thumbnail", "testdir")
        self.assertTrue(os.path.exists("testdir/thumbnail.jpg"))

if __name__ == '__main__':    
    unittest.main()