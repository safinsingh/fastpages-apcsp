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

We used NGINX to proxy requests to the AWS instance and serve the Flask site. We created 4 different `server {}` blocks for each of our sites, each bound to port 80 and serving content on different subdomains.

![nginx]({{ site.baseurl }}/images/new nginx config.png)

We used Freenom to acquire a domain and Certbot to generate SSL certificates in order to serve our websites over HTTPS.

The following links work properly (including subdomains):

- [https://striver.tk/](https://striver.tk/)
- [https://safin.striver.tk/](https://safin.striver.tk/)
- [https://alex.striver.tk/](https://alex.striver.tk/)
- [https://kalani.striver.tk/](https://kalani.striver.tk/)
- [https://navan.striver.tk/](https://navan.striver.tk/)
