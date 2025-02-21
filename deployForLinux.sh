#!/bin/bash

read -p "Enter commit message: " commitMessage
git add .
git commit -m "$commitMessage"
git push origin main
npm run build
npm run deploy