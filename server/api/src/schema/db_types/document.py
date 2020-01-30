import sqlalchemy

from ._db import db, generate_uuid

class Document(db.Model):
    __tablename__ = "documents"
    id = db.Column(db.Integer, primary_key=True)
    uuid = db.Column(db.String(36), name="uuid", primary_key=True, default=generate_uuid)

    title = db.Column(db.String)

    biblatex_id = db.Column(db.Integer, db.ForeignKey('biblatex.id'))
    biblatex = db.relationship("Biblatex")