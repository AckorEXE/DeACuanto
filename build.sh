#!/usr/bin/env bash
# Recompila styles.css a partir de las clases de Tailwind usadas en index.html.
# Ejecuta esto cada vez que cambies clases de Tailwind dentro de index.html.
set -e
cd "$(dirname "$0")"
npm install
npx tailwindcss -i input.css -o styles.css --minify
echo "✓ styles.css actualizado"
