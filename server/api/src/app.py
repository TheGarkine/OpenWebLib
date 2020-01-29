from flask import Flask
from flask import render_template
from flask import request

from graphene_file_upload.flask import FileUploadGraphQLView
import graphene

from schema import schema
from schema.db_types import db

# Initialize Flask
app = Flask(__name__)

app.add_url_rule(
    '/graphql',
    view_func=FileUploadGraphQLView.as_view(
      'graphql',
      schema=schema,
      graphiql=True
    )
)

if __name__ == "__main__":
    #only for testing
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    with app.app_context():
        db.init_app(app)
        db.drop_all()
        db.create_all()

    #dont forget to set host and port according to your needs
    app.config['MAX_CONTENT_LENGTH'] = 4* 1024*1024*1024#4GB
    app.config['UPLOAD_FOLDER'] = "./"
    app.run(port=2020,host="0.0.0.0")