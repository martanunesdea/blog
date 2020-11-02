---
title: "Building a lightweight server-side application with SQLite"
date: "2020-10-15"
tags: "Python"
---
This is going to a short article about how I've used SQLite3 in Python to make a server-side application that communicated with a database.

In this project, I used Flask although I suppose you could use django too. 
The idea is simply: in each different route that you set up, you may call different SQL commands. 

## Why I went with Flask and not Django
Some more text here about why I chose to go with Flask. 
Mostly because: 
1. Flask is a micro framework which served me well because I wasn't looking to build a fully-fledged application.
2. As a direct consequence from the first one, the learning curve to understand Flask is that bit smaller, and as someone with a lot of ongoing projects I don't want to end getting diverted with learning a bunch of other stuff in order to accomplish one specific task.
3. Flask will lend itself well for Raspberry Pi applications where I want to post information to a server website.

## Why I didn't use Express
Simply because I knew that sqlite existed in Python, and I have occasionally stumbled on posts online that trash Express (or other node-based server-side frameworks) for not having as good relational database integration as Python's frameworks.