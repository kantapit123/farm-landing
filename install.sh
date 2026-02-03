#!/bin/bash
cd /Users/ktp.pitch/Workspace/develop/farm-landing
echo "Starting npm install..."
npm install
echo "Install completed with exit code: $?"
echo "Checking node_modules..."
ls -la node_modules | head -5
