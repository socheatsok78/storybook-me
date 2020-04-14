#!/usr/bin/env bash

git status | grep docs/ >> /dev/null

if [ "$1" = "0" ]; then
    echo "======> create deploy ghpages $(date '+%Y-%m-%d %H-%M-%S')"

    git add docs/
    git commit -m "deploy ghpages $(date '+%Y-%m-%d %H-%M-%S')"

    echo "======> deploy ghpages $(date '+%Y-%m-%d %H-%M-%S')"
else
    echo "Nothing to commit!"
fi
