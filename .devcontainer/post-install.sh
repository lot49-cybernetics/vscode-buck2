#!/usr/bin/env bash

# set up pre-commit
pre-commit install --install-hooks

# start the D-Bus service
sudo service dbus start
