#!/bin/bash
for file in *.gv
do
  dot -Tpng -O $file
  mv $file.png ../assets/images
done
