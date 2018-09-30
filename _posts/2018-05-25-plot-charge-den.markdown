---
title: "Plot the 3D charge density"
date: "2018-05-25 21:02:16 -0700"
---

# Visualizing the charge density
Batch visualization of charge densities from DFT calculations has always been a problem for me.
Vesta is fairly user friendly but I don't know how to make it scriptable.
The best solution I can come up with is the use pymatgen and mayavi together.

Here is a short description of how this is done.


## Read the charge density

Here are the only packages needed:
```python
import numpy as np
from mayavi import mlab
from pymatgen.io.vasp import Chgcar
```

The charge density can be read like this:
```python
chgcar = Chgcar.from_file("./CHGCAR")
chg = chgcar.data['total']
lat = struct.lattice.matrix # the lattice parameters stored as a 3x3 matrix
```

We need to set up the uniform grid in a, b, c first:
```python
AA, BB, CC = np.mgrid[0:1:chg.shape[0]*1j,
                      0:1:chg.shape[1]*1j,
                      0:1:chg.shape[2]*1j]
```
The syntax here means the we are generating an array from 0 to 1 in each direction.
The complex integer is the size of the array in that direction, if the third number was real it would denote the step size.
Note that using mgrid returns the array shape that matches the output of the CHGCAR.
This is also the method that will match the desired format of mayavi.

Now we can convert the points to the non-orthogonal system using the lattice vectors.

```python
XX = lat[0,0] * AA + lat[1,0] * BB + lat[2,0] * CC
YY = lat[0,1] * AA + lat[1,1] * BB + lat[2,1] * CC
ZZ = lat[0,2] * AA + lat[1,2] * BB + lat[2,2] * CC
```

The charge density reported in VASP is normalized the # of atoms per cell, not number of electron per volume.
To get it to the same units used by VESTA (e/Bohr^3) we have to do the following conversion:
```python
chg = chg / struct.volume/1.88973**3
```

Finally, we can plot this.
```python
mlab.contour3d(XX, YY, ZZ, chg, contours=[0.1], opacity=0.2)
```
Which should match a VESTA plot with contour level 0.1.
