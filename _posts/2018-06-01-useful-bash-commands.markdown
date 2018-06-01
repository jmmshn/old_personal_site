---
layout: post
title: "Useful Bash Commands"
date: "2018-06-01 09:51:13 -0700"
---

```bash
find $(pwd) -maxdepth 1 -perm -111 -type f | xargs -I % ln -s % ~/bin
```
