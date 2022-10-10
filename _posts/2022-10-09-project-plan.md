---
toc: true
layout: post
categories: [markdown, csp, ap]
comments: true
title: Project Plan
---

# Project Plan

We were initially planning to create a website that allowed users to post inspirational quotes and like their friends' posts. However, we wanted to incorporate a random quotes API into our project and decided to change it. The design we came up with after hours of tireless work is shown below.

## Design Work

After hoco, we all came to my crib and drew this up on an iPad. Then, we transferred it to a Google Drawing as shown. The adjusted plan includes random quotes that people can like rather than posting their own.

## Creation

![cb1]({{ site.baseurl }}/images/striver_new.png)

As you can see, the design shows inspiration quotes from prevalent speakers such as DJ Khaled and Martin Luther King Jr. This satisfies the Collegeboard criteria as follows:

## Program Purpose & Function

- A website to display random inspirational quotes
- Users can create accounts and save quotes by liking themm

## Data Abstraction

- The only state being stored in this application is user and like data
- Data will be stored in a relational database (SQLite, for example)
- Data will be accessed using the `sqlite3` library, a Python interface for SQLite

## Managing Complexity

- Usage of the reccomended Flask folder structure for application (separate module with `__init__` file)
  - Boostrapped at: [https://github.com/safinsingh/striver](https://github.com/safinsingh/striver)
  - Separate `views` folder
- Python dependency/env management using PyEnv (Pipfile-based package locking)

## Procedural Abstraction

- Separate functions and HTML templates for different views
- Quote API abstraction using a function to access the RapidAPI repeatedly
  - Potential issue: server using the same key for all requests could cause rate limiting errors

## Algorithm Implementation

- Following/followers DB setup:

```
Following SQL table:
- User ID (foreign key to users table)
- Follower ID (foreign key to users table)
- Unique/primary key as (userid, followerid)
```

## Testing

- Use of `print` statements to debug API issues
- Use of `pytest` built-in Flask testing framework to ensure HTML pages are rendered correctly
