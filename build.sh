#!/bin/bash
cd /Users/ktp.pitch/Workspace/develop/farm-landing
echo "Starting TypeScript check..."
npx tsc --noEmit
TSC_EXIT=$?
echo "TSC exit code: $TSC_EXIT"

if [ $TSC_EXIT -eq 0 ]; then
  echo "Starting Vite build..."
  npx vite build
  VITE_EXIT=$?
  echo "Vite exit code: $VITE_EXIT"
fi

echo "Checking dist folder..."
ls -la dist 2>/dev/null || echo "dist folder not found"
