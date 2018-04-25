#!/bin/bash

if [$TRAVIS_BRANCH == "master"]; then
  echo 'Deployment started'
  chmod 0700 scripts/deploy.sh
  ./scripts/deploy.sh
fi

