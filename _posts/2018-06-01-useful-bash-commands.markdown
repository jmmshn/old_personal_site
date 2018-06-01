---
layout: post
title: "Useful Bash Commands"
date: "2018-06-01 09:51:13 -0700"
---


Create links in bin of all the excutables in the currenct directory:
```bash
find $(pwd) -maxdepth 1 -perm -111 -type f | xargs -I % ln -s % ~/bin
```

The _$(pwd)_ is needed for the full path, and the _-I %_  allows xargs to place the outputs in the middle of the command instead of at the end. 
