# flazz49 — sito ufficiale

Sito one-page di FLAZZO_49 (Twitch, clip, Discord), React + Vite + Tailwind 4.
Il build produce un unico `index.html` con CSS e JS già incorporati.

## Comandi

```bash
npm install     # installa le dipendenze
npm run build   # genera la cartella dist/
```

## Deploy

Netlify: build `npm install && npm run build`, publish directory `dist` (già impostati in `netlify.toml`).

## Contenuti da modificare

- `src/data.ts` — link (Twitch, Discord, TikTok, clip) e testi dei dati
- `src/components/*.tsx` — sezioni della pagina
- `index.html` — titolo, description, canonical, Open Graph, dati strutturati JSON-LD
- `public/robots.txt` e `public/sitemap.xml` — se cambia il dominio, aggiornali entrambi
