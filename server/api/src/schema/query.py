import graphene
from . import db_types
from graphene_sqlalchemy import SQLAlchemyObjectType

class Document(SQLAlchemyObjectType):
    class Meta:
        model = db_types.Document
        description = "A document"

class Biblatex(SQLAlchemyObjectType):
    class Meta:
        model = db_types.Biblatex
        description = "Biblatex information for a document"

class RootQuery(graphene.ObjectType):
    class Meta:
        description = "My description"
    hello = graphene.String(description="A typical Hello World!")

    documents = graphene.List(Document)
    biblatex = graphene.List(Biblatex)

    def resolve_hello(self,info):
        print(info)
        return 'World'

    def resolve_documents(self,info):
        return Document.get_query(info).all()