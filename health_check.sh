#!/bin/bash
# Custom health checks like this don't work in fly.io right now...
res=$(curl -s https://pokedex-lauri.fly.dev/health)

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0
fi

echo "Failed curl to /health"
# 0: OK, 1: Bad.
exit 1