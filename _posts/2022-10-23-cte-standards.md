---
toc: true
layout: post
categories: [markdown, csp, ap]
comments: true
title: CTE Standards
---

**What standards have we hit so far? Which assignment do they relate to?**

We've hit a majority of the CTE standards thus far. Some of the main ones that we covered this week in our Computer Systems and Networks were #7 and #9, which are:

7. Develop Web and online projects.
8. Develop software for a variety of devices, including robotics.

For #7, we're developing a frontend for our project. Other users can access this frontend in their browser. The browser makes an HTTP GET request to a remote server which returns HTML. This HTML is then parsed and displayed in the client's browser, showing them the webpage. The way that our frontend works is that fastpages statically generates a site with HTML, CSS, and JS. Then, it's served by GitHub Pages at our team's URL.

As for #9, we're not only developing software for the client browser, but also the server. We've created a Flask-based web server hosting an API that the frontend will access. It's written in Python and run in a Docker container on AWS. The server accepts both GET and POST requests from a client and returns/accepts data in the JSON format.

**What standards are you looking forward to learning more about?**

I'm looking forward to implementing standard #8, which is the use of databases. Databases are used for persistent data storage and are more effective than the in-memory solution that our backend currently uses.

**What other careers can you benefit from being in this pathway?**

This pathway helps me develop the skills needed for a career in software development. In a production setting, I would need to know the ins and outs of both implementing and using a database tool to manage user data and other information.
