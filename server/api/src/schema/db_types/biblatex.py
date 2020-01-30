import sqlalchemy

from ._db import db

class Biblatex(db.Model):
    __tablename__ = "biblatex"
    id = db.Column(db.Integer, primary_key=True)
    uuid = db.Column(db.String)
    
    key = db.Column(db.String)
    #individuals
    author = db.Column(db.String)
    bookauthor = db.Column(db.String)
    editor = db.Column(db.String)
    #editora/b/c TODO
    afterword = db.Column(db.String)
    annotator = db.Column(db.String)
    commentator = db.Column(db.String)
    forward = db.Column(db.String)
    introduction = db.Column(db.String)
    tranlsator = db.Column(db.String)
    holder = db.Column(db.String)
    
    #organisations
    institution = db.Column(db.String)
    organization = db.Column(db.String)
    publisher = db.Column(db.String)

    #titiles
    title = db.Column(db.String)
    indextitle = db.Column(db.String)
    booktitle = db.Column(db.String)
    maintitle = db.Column(db.String)
    journaltitle = db.Column(db.String)
    issuetitle = db.Column(db.String)
    eventtitle = db.Column(db.String)
    reprinttitle = db.Column(db.String)
    series = db.Column(db.String)

    #volumes &versions TODO do some of them can be sth different then number?
    volume = db.Column(db.String)
    number = db.Column(db.String)
    part = db.Column(db.String)
    issue = db.Column(db.String)
    volumes = db.Column(db.String)
    edition = db.Column(db.String)
    version = db.Column(db.String)
    pubstate = db.Column(db.String)

    #pages
    pages = db.Column(db.String)
    pagetotal = db.Column(db.String)
    pagination = db.Column(db.String)
    #bookpagination = db.Column(db.String)

    #dates
    date  = db.Column(db.String)
    eventdate = db.Column(db.String)
    urldate = db.Column(db.String)

    #places
    location = db.Column(db.String)
    venue = db.Column(db.String)

    #digital
    url = db.Column(db.String)
    doi = db.Column(db.String)
    eid = db.Column(db.String)
    eprint = db.Column(db.String)
    eprinttype = db.Column(db.String) # TODO eprintclass

    #types
    type = db.Column(db.String) # TODO
    entrysubtype = db.Column(db.String)

    #misc
    addendum = db.Column(db.String)
    note = db.Column(db.String)
    howpublished = db.Column(db.String)
    language = db.Column(db.String)

    #international standards
    isan = db.Column(db.String)
    isbn = db.Column(db.String)
    ismn = db.Column(db.String)
    isrn = db.Column(db.String)
    issn = db.Column(db.String)
    iswc = db.Column(db.String)

    abstract = db.Column(db.String)
    annotation = db.Column(db.String)
    file = db.Column(db.String)
    library = db.Column(db.String)

    #labels
    label = db.Column(db.String)
    shorthand = db.Column(db.String)
    shorthandintro = db.Column(db.String)

    ## Non printable
