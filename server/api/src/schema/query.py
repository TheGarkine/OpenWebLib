import graphene
from . import db_types
from graphene_sqlalchemy import SQLAlchemyObjectType

class Document(SQLAlchemyObjectType):
    class Meta:
        model = db_types.Document
        description = "A document"
        exclude_fields = ['id']

class Biblatex(SQLAlchemyObjectType):
    class Meta:
        model = db_types.Biblatex
        description = "Biblatex information for a document"
        exclude_fields = ['id']

class RootQuery(graphene.ObjectType):
    class Meta:
        description = "My description"

    all_documents = graphene.List(Document)
    biblatex = graphene.List(Biblatex)

    def resolve_all_documents(self,info):
        return Document.get_query(info).all()