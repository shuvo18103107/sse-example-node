# Node.js SSE Example with Docker

This repository demonstrates how to set up a simple **Server-Sent Events (SSE)** application using **Node.js** and **Express**, with a Dockerized environment for easy deployment.

## Features

- A minimalistic Node.js application serving SSE on `/stream`.
- Docker setup for streamlined development and deployment.
- A basic HTTP server with two routes:

## Prerequisites

- **Docker** and **Docker Compose** installed on your machine.
- Basic understanding of Node.js and Docker (optional).

## Setup Instructions

Follow the steps below to get the application running:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/node-sse-docker.git

cd node-sse-docker
```

### 2. Build and run the Docker container

```bash
docker-compose up --build
```
### 3. Test the application

  - Navigate to http://localhost:4000 to run the app.
  - Navigate to http://localhost:4000/stream to view the SSE stream with a counter incrementing every second.

## Example Client

 ### To test SSE functionality in your browser:

  - Open the developer console (F12 in most browsers).
  - Use the following code in the Console tab:
```bash

const eventSource = new EventSource("http://localhost:4000/stream");
eventSource.onmessage = (event) => {
  console.log(event.data);
};

```
### Dependencies
  - Node.js (v16-alpine)
  - Express.js
  - nodemon for development hot-reloading

