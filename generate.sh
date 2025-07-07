#!/bin/sh

npx tailwindcss -i ./input.css -o ./tailwind.css && \
    esbuild main.tsx --bundle --minify --outfile=main.js
