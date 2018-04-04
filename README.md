# light-nodejs-docker
light-weight 70MB docker for nodejs project

Build locally
```
docker build -t light-nodes-docker .
```

Or you can pull from [DockerHub](https://hub.docker.com/r/sdqdocker/light-nodejs-docker/)

Run
```
docker run -d -p 8080:8080 light-nodejs-docker
```