#!/bin/bash
cd /home/kavia/workspace/code-generation/arogyasphere-107136-e1001fcc/arogyamitr_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

