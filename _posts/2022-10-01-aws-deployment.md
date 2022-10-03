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
