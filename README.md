# flazz49 — sito ufficiale

Sito one-page di FLAZZO_49 (Twitch, clip, Discord), React + Vite + Tailwind 4.
Il build produce un unico `index.html` con CSS e JS già incorporati.

## Comandi

```bash
npm install                     # installa le dipendenze
node scripts/fetch-assets.mjs   # scarica le immagini (solo la prima volta)
npm run build                   # genera la cartella dist/
```

## Deploy

Netlify: build `npm install && node scripts/fetch-assets.mjs && npm run build`,
publish directory `dist` (già impostati in `netlify.toml`).

## Immagini

`public/og.png` e `public/images/flazzo-about.png` non sono versionate: lo script
`scripts/fetch-assets.mjs` le scarica dal sito pubblicato. Per averle nel repository
basta copiarle in `public/` (lo script salta i file già presenti) e togliere le due
righe corrispondenti da `.gitignore`.

## Contenuti da modificare

- `src/data.ts` — link (Twitch, Discord, TikTok, clip) e testi dei dati
- `src/components/*.tsx` — sezioni della pagina
- `index.html` — titolo, description, canonical, Open Graph, dati strutturati JSON-LD
- `public/robots.txt` e `public/sitemap.xml` — se cambia il dominio, aggiornali entrambi
