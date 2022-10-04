---
toc: true
layout: post
categories: [markdown, csp, ap]
comments: true
title: AWS Deployment
---

# Docker

We set up 4 different containers to run each of our sites on. Within the container, each site was bound to port 8080 with `gunicorn`. It was then mapped to a unique port on the AWS instance.

![docker]({{ site.baseurl }}/images/docker containers.png)

# cURL

We used cURL to test if our Flask server running inside the container was working:

![docker]({{ site.baseurl }}/images/curl docker.png)

# NGINX

We used NGINX to proxy requests to the AWS instance and serve the Flask site. We created 4 different `server {}` blocks for each of our sites, each bound to a different port. We had to adjust our firewall policy to allow TCP connections on each port.

![nginx]({{ site.baseurl }}/images/nginx config.png)

Here's proof that accessing the site works using its public IP:

![site]({{ site.baseurl }}/images/curl aws.png)

# Configuration

Here is my `docker-compose.yml`:

```yaml
version: "3"
services:
  web:
    image: flask_safin_v1
    build: .
    ports:
      - "8086:8080"
    volumes:
      - persistent_volume:/app/volumes
volumes:
  persistent_volume:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /home/ubuntu/safin-flask/volumes
```

Here is my `Dockerfile`:

```dockerfile
FROM docker.io/python:3.9

WORKDIR /app

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y python3 python3-pip git
COPY . .

RUN pip install --no-cache-dir -r requirements.txt
RUN pip3 install gunicorn

ENV GUNICORN_CMD_ARGS="--workers=1 --bind=0.0.0.0:8080"

EXPOSE 8080

CMD [ "gunicorn", "main:app" ]
```

Here is my NGINX configuration file:

```nginx
server {
    listen 8080;
    listen [::]:8080;
    server_name 18.216.138.52;

    location / {
        proxy_pass http://localhost:8086;
        add_header "Access-Control-Allow-Origin" *;
    }
}
```
