#!/usr/bin/env sh
set -x

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
npm run docker-push
