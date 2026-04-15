#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: ./scripts/update-ga.sh G-XXXXXXXXXX"
  exit 1
fi

GA_ID="$1"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

if [[ ! "$GA_ID" =~ ^G-[A-Z0-9]+$ ]]; then
  echo "Invalid GA4 ID format. Expected something like: G-ABC123XYZ"
  exit 1
fi

perl -0pi -e "s#G-XXXXXXXXXX#${GA_ID}#g" pranit-portfolio.html

echo "Updated GA4 ID to ${GA_ID} in pranit-portfolio.html"
echo "Next: run ./scripts/preflight.sh"
