# -*- encoding: utf-8 -*-
import re
from bs4 import BeautifulSoup, Comment


def html_parser(file_path, log_file_handler):
    print("Starting to extract the text out of the received html-file")
    log_file_handler.write("Starting to extract the text out of the received html-file \n")

    with open(file_path, "r", encoding="ISO-8859-1") as file_handler:
        # Blacklisted tags which will be ignored and extracted from the HTML-files
        blacklist = ["script", "style"]
        soup = BeautifulSoup(file_handler.read(), features="html.parser")
        # Strips all blacklisted HTML-tags

        for tag in soup.findAll():
            if tag.name.lower() in blacklist:
                tag.extract()

        # Retrieves all comments from the HTML-file and removes them
        comments = soup.findAll(text=lambda text:isinstance(text, Comment))
        for comment in comments:
            comment.extract()

        # Retrieves the visible text of the web page
        full_text = soup.body.getText()

    print("The parsing process of the html-file finished")
    log_file_handler.write("The parsing process of the html-file finished \n")

    return full_text

