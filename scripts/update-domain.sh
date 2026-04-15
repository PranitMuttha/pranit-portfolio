#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: ./scripts/update-domain.sh yourdomain.com"
  exit 1
fi

DOMAIN="$1"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

if [[ "$DOMAIN" == http* ]]; then
  echo "Please pass only domain name (example: yourdomain.com), not URL."
  exit 1
fi

OLD_DOMAIN="pranitmuttha.com"
NEW_URL="https://${DOMAIN}/"

# macOS-compatible in-place edit helper
replace_in_file() {
  local file="$1"
  local find="$2"
  local repl="$3"
  perl -0pi -e "s#\Q${find}\E#${repl}#g" "$file"
}

replace_in_file "pranit-portfolio.html" "https://${OLD_DOMAIN}/" "${NEW_URL}"
replace_in_file "sitemap.xml" "https://${OLD_DOMAIN}" "https://${DOMAIN}"
replace_in_file "robots.txt" "https://${OLD_DOMAIN}" "https://${DOMAIN}"
replace_in_file "og-image.svg" "${OLD_DOMAIN}" "${DOMAIN}"

echo "Updated domain references to ${DOMAIN}."
echo "Next: run ./scripts/preflight.sh"
