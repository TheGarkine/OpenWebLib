#!/bin/bash

echo "Running all test cases for PDF-file image extraction"
python3 test_pdf_image_extraction.py
return_code=$?
if [ $return_code -eq 0 ];
then
    echo "All test cases were executed successfully!"
else
    echo "At least one test case failed! Check the status"
fi
echo "=============================================================================================="
echo "Running all test cases for PDF-file text extraction and language detection"
python3 test_pdf_text_processing.py
return_code=$?
if [ $return_code -eq 0 ];
then
    echo "All test cases were executed successfully!"
else
    echo "At least one test case failed! Check the status"
fi
echo "=============================================================================================="
echo "Removing all directories which were created during the testing process!"
rm -rf image_test_dir/