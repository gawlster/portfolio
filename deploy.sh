#!/usr/bin/env bash

npm run predeploy
npm run deploy
google-chrome-stable https://github.com/gawlster/portfolio/deployments
