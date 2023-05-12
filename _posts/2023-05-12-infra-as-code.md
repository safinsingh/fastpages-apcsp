---
toc: true
layout: post
categories: [markdown, csp, ap]
comments: true
title: Infrastructure as Code
---

Our class suffers from poor cloud resource management. We need a better way to orchestrate and update students' Flask websites in order to maintain reasonable performance and reason usage.

## MonkeyOps

A web interface that allows students to simply enter the URL to the GitHub repository containing their flask site and automatically builds and deploys it to the class AWS instance. Frontend interacts with backend API that writes to and publishes a TerraForm configuration to a public repository visible to students.

Students will be able to save valuable time spent debugging deployment errors and spend it instead on actually learning programming, the intended focus of this class.

## Sorting & Filtering

All students' deployed websites will be listed on a page that includes container statistics (CPU%, MEM, etc). The AWS instance could include a program to monitor running containers and send updated information to backend. Temporary storage of these statistics using Redis; frontend refreshes at ~5s intervals with WebSocket. Users can sort by any of these statistics on the frontend interface. Sorting algorithm will be implemented in JavaScript on frontend.
