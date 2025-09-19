#!/bin/bash

trash docs # or rm
hugo build --minify --buildFuture -e production
pagefind --site docs
