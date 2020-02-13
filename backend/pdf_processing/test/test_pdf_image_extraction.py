import unittest
import os, sys, subprocess
sys.path.append('../src/')
import pdf_parser

class TestPDFImageExtractionFunctions(unittest.TestCase):
    def test_number_of_extracted_images(self):
        # extract_images_from_pdf(file_path, save_path, filename)
        if not os.path.exists("image_test_dir"):
            os.mkdir("image_test_dir")
        pdf_parser.extract_images_from_pdf("test_files/learning.pdf", "image_test_dir", "test")
        self.assertEqual(len(os.listdir("image_test_dir/")), 14)

    def test_thumbnail_existance(self):
        # save_title_page(file_path, save_name, save_path)
        pdf_parser.save_title_page("test_files/learning.pdf", "thumbnail", "image_test_dir")
        self.assertTrue(os.path.exists("image_test_dir/thumbnail.jpg"))

if __name__ == '__main__':
    if os.path.exists("image_test_dir"):
        subprocess.call(["rm", "-rf" , "image_test_dir"])
    unittest.main()