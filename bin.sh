#!/bin/bash
case $1 in
  es)
    cp package.es.json ./package.json
    ;;
  ts)
    cp package.ts.json ./package.json
    ;;
  *)
    ;;
esac