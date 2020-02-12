import sys
import PyPDF2
from pdf2image import convert_from_path

# pdf2image Dokumentation: https://pdf2image.readthedocs.io/en/latest/reference.html

def save_title_page(file_path, save_name, save_path):
    pages = convert_from_path(pdf_path=file_path, single_file=True, dpi=300)
    pages[0].save('{}.jpg'.format(save_path + "/" + save_name), 'JPEG')


def extract_images_from_pdf(file_path, save_path, filename):
    file_stream = open(file_path, 'rb')
    pdf_reader = PyPDF2.PdfFileReader(file_stream) # Dokumentation: https://pythonhosted.org/PyPDF2/PdfFileReader.html    

    i = 0
    for j in range(pdf_reader.getNumPages()):
        page = pdf_reader.getPage(j)
        if '/XObject' in page['/Resources']:
            xObject = page['/Resources']['/XObject'].getObject()

            for obj in xObject:
                if xObject[obj]['/Subtype'] == '/Image':
                    if xObject[obj]['/Filter'] == '/DCTDecode':
                        data = xObject[obj]._data
                        img = open("{}".format(save_path + "/" + filename + "_image_" + str(i)) + ".jpg", "wb")
                        img.write(data)
                        img.close()
                        i += 1
    file_stream.close()
