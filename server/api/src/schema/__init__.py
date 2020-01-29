import graphene

from .query import *
from .mutation import * 

schema = graphene.Schema(query=RootQuery,types=[
        Document
    ],
    mutation=RootMutation)