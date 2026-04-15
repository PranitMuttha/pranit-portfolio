#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

FAIL=0

PROD_FILES=(
  "pranit-portfolio.html"
  "sitemap.xml"
  "robots.txt"
  "og-image.svg"
  "resume.html"
  "404.html"
)

check_placeholder() {
  local pattern="$1"
  local label="$2"
  local matches
  matches=$(grep -nH "$pattern" "${PROD_FILES[@]}" 2>/dev/null || true)
  if [[ -n "$matches" ]]; then
    echo "✗ Found placeholder for ${label}:"
    echo "$matches"
    FAIL=1
  else
    echo "✓ ${label} looks configured"
  fi
}

echo "Running launch preflight checks..."

check_placeholder "G-XXXXXXXXXX" "GA4 measurement ID"
check_placeholder "pranitmuttha.com" "production domain"

for required in pranit-portfolio.html netlify.toml robots.txt sitemap.xml site.webmanifest 404.html resume.html; do
  if [[ -f "$required" ]]; then
    echo "✓ Found ${required}"
  else
    echo "✗ Missing required file: ${required}"
    FAIL=1
  fi
done

if [[ $FAIL -eq 1 ]]; then
  echo "\nPreflight failed. Fix the issues above before production launch."
  exit 1
fi

echo "\nPreflight passed. Ready for production push."
