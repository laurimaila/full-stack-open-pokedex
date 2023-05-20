#!/bin/bash

res=$(curl -s https://pokedex-lauri.fly.dev/health)

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health but failed on purpose"
  exit 1
fi

echo "Failed curl to /health"
# 0: OK, 1: Bad.
exit 1