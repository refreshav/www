#!/usr/bin/env bash
hugo -b https://refreshannapolisvalley.org/ -F -d ../RefreshAV.github.io
git -C ../RefreshAV.github.io add .
git -C ../RefreshAV.github.io commit -a -m "new build"
git -C ../RefreshAV.github.io push
