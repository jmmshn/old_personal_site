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
conda create -n my_env python=3
```

- Move the packages in the matsci channel to the very top
```
(my_env) % conda config --prepend channels matsci
Warning: 'matsci' already in 'channels' list, moving to the top
```

# Install the Relevant Packages
- Install the packages you actually need:
```
(my_env) % conda install pymatgen
```

- When you have activated the environment, check which python you are using, make sure that it belongs to the virtual environment.
```
(my_env) % which python
/Users/lik/miniconda3/envs/matsci/bin/python
```
Then you can install packages downloaded from github into the virtual environment using:
```
(my_env) % python setup.py install
```

# Configuring Jupyter

- Install Jupyter using
```
(my_env) % conda install pymatgen
```
