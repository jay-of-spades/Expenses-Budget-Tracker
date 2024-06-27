#!/bin/bash

# Ensure you are on the main branch
git checkout main

# Build the project
npm run build

# Switch to gh-pages branch
git checkout gh-pages

# Remove existing files
git rm -rf .

# Copy the build files from the dist directory
cp -R ../dist/* .

# Add and commit changes
git add .
git commit -m "Deploy to GitHub Pages"

# Push to the remote gh-pages branch
git push origin gh-pages

# Switch back to the main branch
git checkout main
