var store = [{
        "title": "Configure Python",
        "excerpt":"Steps to set up python environment from scratch and install python packages directly from github. Setting up Miniconda3 Install Miniconda3 from: https://conda.io/miniconda.html Create a new python3 environment. conda create -n my_env python=3 Move the packages in the matsci channel to the very top (my_env) % conda config --prepend channels matsciWarning:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/configure-python/",
        "teaser":null},{
        "title": "Atomate Workflow Setup",
        "excerpt":"Install and Configure Atomate and Fireworks using MricoConda As I’m writing this, there seems to be some kind of dependency issue with atomate related to the pybtex version number.To fix this we need to make sure that conda can find the newest version of pybtex (&gt;=0.21) which is availible at[https://anaconda.org/conda-forge/pybtex]....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/atomate-workflow-setup/",
        "teaser":null},{
        "title": "Plot the 3D charge density",
        "excerpt":"Visualizing the charge density Batch visualization of charge densities from DFT calculations has always been a problem for me.Vesta is fairly user friendly but I don’t know how to make it scriptable.The best solution I can come up with is the use pymatgen and mayavi together. Here is a short...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/plot-charge-den/",
        "teaser":null},{
        "title": "Useful Bash Commands",
        "excerpt":"Create links in bin of all the excutables in the currenct directory: find $(pwd) -maxdepth 1 -perm -111 -type f | xargs -I % ln -s % ~/binThe $(pwd) is needed for the full path, and the -I % allows xargs to place the outputs in the middle of the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/useful-bash-commands/",
        "teaser":null}]
