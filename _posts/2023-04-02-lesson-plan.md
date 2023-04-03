---
toc: true
layout: post
categories: [markdown, csp, ap]
comments: true
title: NGINX Lesson
---

# Lesson Plan: Introduction to NGINX

## Objective

This lesson will teach students about NGINX, how to configure it for basic HTTP servers, proxy passing, and SSL.

## Prerequisites

- Basic understanding of HTTP
- Familiarity with the command line

## Materials

- Computer with internet access
- NGINX installed

## Lesson Outline

1. Introduction to NGINX
2. Basic NGINX configuration
3. Configuring a simple HTTP server
4. Proxy passing
5. Configuring SSL

---

## 1. Introduction to NGINX

NGINX is a powerful web server, reverse proxy server, and load balancer. In this lesson, we will focus on using NGINX as a web server and reverse proxy server.

### Key Terms

- **Web server**: A software that serves web content (HTML, CSS, JavaScript, etc.) to clients, such as web browsers.
- **Reverse proxy server**: A server that acts as an intermediary between clients and other servers, forwarding client requests to the appropriate servers and returning the servers' responses to the clients.

---

## 2. Basic NGINX Configuration

NGINX configuration files use a simple, declarative syntax. Here's a basic structure of an NGINX configuration file:

```nginx
events {
    worker_connections 1024;
}

http {
    server {
        # Server configuration goes here
    }
}
```

## 3. Configuring a Simple HTTP Server

Let's configure a basic HTTP server that serves static files from a directory.

```nginx
http {
    server {
        listen 80;
        server_name example.com;
        root /var/www/html;
        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```

### Code Explanation

- `listen 80;`: This directive tells NGINX to listen for incoming connections on port 80 (the default HTTP port).
- `server_name example.com;`: This directive specifies the domain name for the server.
- `root /var/www/html;`: This directive sets the root directory for serving static files.
- `location / { ... }`: This block defines a location context for the root URL path.
- `try_files $uri $uri/ =404;`: This directive tells NGINX to try serving a requested file, then a directory with the same name, or return a 404 error if neither is found.

## 4. Proxy Passing

Now, let's configure NGINX as a reverse proxy server to forward incoming requests to a backend server.

```nginx
http {
    server {
        listen 80;
        server_name proxy.example.com;

        location / {
            proxy_pass http://backend.example.com;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}
```

### Code Explanation

- `proxy_pass http://backend.example.com;`: This directive forwards incoming requests to the specified backend server.
- `proxy_set_header Host $host;`: This directive sets the Host header to the domain name of the proxy server.
- `proxy_set_header X-Real-IP $remote_addr;`: This directive sets the X-Real-IP header to the client's IP address.
