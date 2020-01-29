import sqlalchemy

from ._db import db

class Document(db.Model):
    __tablename__ = "documents"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)