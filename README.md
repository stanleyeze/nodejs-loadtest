# LOAD TESTING WITH NODEJS

Nodejs Application for testing how a URL responds to multiple and concurrent requests within a short period of time. The program returns information about the following;

- Count and percentage of successful requests
- Count and percentage of failed requests
- Count and percentage of failed requests
- Avg time of the success response

## STRUCTURE

This project consists of a simple react frontend and a nodejs server.

### Client

The client server was built with reactjs.

### Backend

Nodejs server.

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
