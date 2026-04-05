#!/bin/bash
# Quick local test server
echo "Starting local server at http://localhost:8000"
echo "Open http://localhost:8000 in your browser"
python3 -m http.server 8000
