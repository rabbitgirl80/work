#!/bin/sh
cd "$(dirname "$0")"
echo "The Daily Draft — http://localhost:3456"
echo "Stop with Ctrl+C"
python3 -m http.server 3456
