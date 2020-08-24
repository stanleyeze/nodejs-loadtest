# LOAD TESTING WITH NODEJS

Nodejs Application for testing how a URL responds to multiple and concurrent requests within a short period of time. The program returns information about the following;

- Count and percentage of successful requests
- Count and percentage of failed requests
- Count and percentage of failed requests
- Avg time of the success response

## STRUCTURE

This project automated build and upload of three docker images to docker hub using TravisCI. To make this work, you need to create environmental variables "DOCKER_ID and "DOCKER_PASSWORD" from your Travis console

## STRUCTURE

This project consists of a simple react frontend and a nodejs server.

### Client

The client server was built with reactjs runing at port 3000.

### Backend

Nodejs server running at port 5000.

### loadtest

npm library was uses to sending request and getting statistics of the requests (successful or faild)

### Dockerfile

I included Dockerfiles for building various images

### NGINX

Server for reverse proxy

### Running docker containers

Pull the images from stanleyeze/loadtest-nginx, stanleyeze/loadtest-backend, stanleyeze/loadtest-client

run **docker-compose up --build**

Once the containers are running, access client server at / and port 3000, backend at /api at port 5000
