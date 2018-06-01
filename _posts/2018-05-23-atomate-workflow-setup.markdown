---
layout: post
title: "Atomate Workflow Setup"
date: "2018-05-23 10:43:18 -0700"
---

# Install and Configure Atomate and Fireworks using MricoConda

As I'm writing this, there seems to be some kind of dependency issue with atomate related to the pybtex version number.
To fix this we need to make sure that conda can find the newest version of pybtex (>=0.21) which is availible at
[https://anaconda.org/conda-forge/pybtex].

The easiest way to fix this is to prepend conda-forge to the list of channels in your ~/.condarc along with the matsci channel.

```bash
conda config --prepend channels conda-forge
conda config --prepend channels matsci
```

<!--- TODO -->

Atomate relies on fireworks so you only have to request to have atomate installed.
```
conda install atomate
```

The basic idea is your have *two* different MongoDB databases to manage your calculations.
One we'll call FWORKS for managing the **launchpad** (fireworks utility for managing jobs), another one we'll call TASKS to store the results of the calculations.

```yaml
#FILENAME my_fworker.yaml
name: Cori KNL FireWorker
category: ''
query: '{}'
env:
   db_file: /global/homes/j/jshen/.atomate/db.json
   vasp_cmd: "srun -n 32 -c16 --cpu_bind=cores /global/homes/j/jshen/bin/VASP/vasp.544.cori.knl_noncol"
   scratch_dir: null
   incar_update:
      KPAR: 8
```

```json
{
  "host": "[HOSTNAME]",
  "port": "[PORTNUM]",
  "database": "tasks_collection",
  "collection": "tasks",
  "admin_user": "[USR]",
  "admin_password": "[PASS]",
  "aliases": {}
}
```


```yaml
#FILENAME my_launchpad.yaml
host: [HOSTNAME]
port: [PORTNUM]
name: 'fwork_collections'
username: [USR]
password: '[PASS]'
logdir: /global/homes/j/jshen/.atomate/logs
strm_lvl: INFO
user_indices: []
wf_user_indices: []
```


```yaml
#FIlENAME my_qadapter.yaml
_fw_name: CommonAdapter
_fw_q_type: SLURM
rocket_launch: rlaunch -c /global/homes/j/jshen/.atomate/config rapidfire
nodes: 2
#ntasks_per_node: 32
walltime: '0:30:00'
#qos: regular
account: m892
queue: debug
job_name: null
constraint: 'knl,quad,cache'
pre_rocket: |
        module unload vasp
        module load vasp-tpc/5.4.4-knl
        export OMP_PROC_BIND=true
        export OMP_PLACES=threads
        export OMP_NUM_THREADS=8
post_rocket: null
logdir: /global/homes/j/jshen/.atomate/logs
```



# Install Robo 3T

Robo 3T allows you to view the the output of the calculations in your database.

# Questions

* Why does the locally installed atomate not work? order of channels
* TODO Write a configuration script to set up the config directory
