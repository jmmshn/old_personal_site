---
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

- Install Jupyter using conda
```
(my_env) % conda install jupyter
```
- Startup scripts and where to install:
I do this inside a jupyter notebook with the command
```
%%writefile ~/.ipython/profile_default/startup/00-searborn.ipy
```

- The path where you keep all your personal scripts/classes can be added using the _ABSOLUTE_ path (no "~" or "$HOME" or other shorthands).  Use append to add the end or insert to add anywhere.
``` python
import sys
sys.path.append( '/Users/lik/Google_Drive/ipython_scripts/scripts/' )
sys.path.insert(0, '/media/lik/Storage/Google_Drive/ipython_scripts/scripts') # ubuntu needs absolute path
```


- Set up Jupyter to run as a server

<!--- TODO -->

# Configure Atom to edit and run python code

List of useful atom packages  

<!--- TODO -->
