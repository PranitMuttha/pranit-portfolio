#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "Usage: ./scripts/prepare-launch.sh yourdomain.com G-ABC123XYZ"
  exit 1
fi

DOMAIN="$1"
GA_ID="$2"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

./scripts/update-domain.sh "$DOMAIN"
./scripts/update-ga.sh "$GA_ID"
./scripts/preflight.sh

echo "Launch preparation complete."
echo "Next: git add . && git commit -m 'launch config' && git push"
