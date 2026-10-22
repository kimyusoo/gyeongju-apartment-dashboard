#!/usr/bin/env bash
set -euo pipefail
rm -rf dist
mkdir -p dist/server dist/.openai
cp .openai/hosting.json dist/.openai/hosting.json
node scripts/generate-worker.mjs
