---
layout: post
title: "Configure Python"
date: "2018-05-18 17:41:32 -0700"
---

Steps to set up python environment from scratch and install python packages directly from github.

# Setting up Miniconda3

- Install Miniconda3 from: <https://conda.io/miniconda.html>

- Create a new python3 environment.
```
conda create -n matsci python=3
```

- When you have activated the environment, check which python you are using, make sure that it belongs to the virtual environment.
```
(matsci) % which python
/Users/lik/miniconda3/envs/matsci/bin/python
```

- move the packages in the matsci channel to the very top
```
(matsci) % conda config --prepend channels matsci
Warning: 'matsci' already in 'channels' list, moving to the top
```

# Install the Relevant Packages
- install the packages you actually need:
```
(matsci) % conda install pymatgen
```
