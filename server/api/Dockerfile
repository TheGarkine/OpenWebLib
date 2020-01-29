from python:3.7-alpine3.11

RUN mkdir /api/ && \
    mkdir /api/shared/

ADD src/ /api/
RUN apk add build-base --no-cache && \
    pip3 install -r /api/requirements.txt && \
    apk del build-base