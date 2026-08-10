#!/usr/bin/env bash
# Builds a fully static copy of the site into ./docs so it can be served by
# GitHub Pages (main branch, /docs folder).
set -euo pipefail
cd "$(dirname "$0")/.."

PAGES=("/" "/book" "/solutions" "/industries" "/research" "/resources" "/about" "/contact" "/privacy" "/terms")
PORT=4321

echo "> Building..."
bunx vite build

# Pin the worker compatibility date to one the local wrangler binary supports.
node -e '
const f="dist/server/wrangler.json";const fs=require("fs");const j=JSON.parse(fs.readFileSync(f,"utf8"));
const d=new Date(Date.now()-3*864e5).toISOString().slice(0,10);
if(j.compatibility_date>d){j.compatibility_date=d;fs.writeFileSync(f,JSON.stringify(j,null,2));}
'

echo "> Starting local render server..."
(cd dist/server && bunx --bun wrangler@4 dev -c wrangler.json --port $PORT --ip 127.0.0.1 > /tmp/render-server.log 2>&1) &
SRV=$!
trap 'kill $SRV 2>/dev/null || true; pkill -f "wrangler@4 dev" 2>/dev/null || true' EXIT

for i in $(seq 1 90); do
  curl -sf -o /dev/null "http://127.0.0.1:$PORT/" && break
  sleep 2
done

echo "> Writing static HTML into ./docs"
rm -rf docs_tmp && mkdir -p docs_tmp
cp -r dist/client/. docs_tmp/
for p in "${PAGES[@]}"; do
  if [ "$p" = "/" ]; then out="docs_tmp/index.html"; else mkdir -p "docs_tmp$p"; out="docs_tmp$p/index.html"; fi
  curl -sf "http://127.0.0.1:$PORT$p" -o "$out"
  echo "  ok $p"
done

# Plain-text SEO files at the site root.
curl -sf "http://127.0.0.1:$PORT/sitemap.xml" -o docs_tmp/sitemap.xml && echo "  ok /sitemap.xml"
cp public/robots.txt docs_tmp/robots.txt && echo "  ok /robots.txt"
cp docs_tmp/index.html docs_tmp/404.html
touch docs_tmp/.nojekyll
[ -f docs/CNAME ] && cp docs/CNAME docs_tmp/CNAME
rm -rf docs && mv docs_tmp docs
echo "> Done. Commit ./docs and set GitHub Pages to main + /docs."
