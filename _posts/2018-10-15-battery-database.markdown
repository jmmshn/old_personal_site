---
title: "Battery Database (For Materials Project)"
date: "2018-10-15 13:38:55 -0700"
---

# How We Construct the Battery Database

The generation fo the batteries database takes the following steps:

* First, the `tasks` database is parsed by the `MaterialBuilder` from `emmet` to generate the `materials` database.
The the builder groups calculation of similar materials together and picks the most reliable results for each parameter from different calculations.

![](/assets/images/2018_task_mat_fc.gv.png)

* For insertion electrodes, The next step is to group the materials together by their structural similarity.
The analysis of the battery materials is done by the modules found in `pymatgen.apps.battery.insertion_battery.py`.


![](/assets/images/2018_mat_batt_fc.gv.png)
