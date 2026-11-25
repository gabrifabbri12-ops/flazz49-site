// Le due immagini pesanti (foto "chi sono" e immagine Open Graph) non stanno nel
// repository: vengono prese dal sito già pubblicato, così restano identiche a
// quelle online e il repository contiene solo testo.
//
// Vengono provati in ordine gli indirizzi del sito: se un dominio cambia (per
// esempio rinominando il sito su Netlify) il build continua a funzionare.
//
// Per averle versionate basta copiarle dentro public/ (public/og.png e
// public/images/flazzo-about.png): lo script salta i file già presenti.

import { mkdir, access, writeFile } from "node:fs/promises";
import path from "node:path";

const SORGENTI = (
  process.env.ASSETS_SOURCE
    ? [process.env.ASSETS_SOURCE]
    : ["https://flazzo49.netlify.app", "https://flazz49.netlify.app"]
).map((s) => s.replace(/\/+$/, ""));

const FILES = [
  { url: "/og.png", dest: "public/og.png" },
  { url: "/images/flazzo-about.png", dest: "public/images/flazzo-about.png" },
];

const esiste = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

async function scarica(url) {
  for (const base of SORGENTI) {
    const res = await fetch(base + url);
    if (res.ok) {
      return { buf: Buffer.from(await res.arrayBuffer()), da: base };
    }
    console.log(`  ${base}${url}: HTTP ${res.status}`);
  }
  throw new Error(
    `impossibile scaricare ${url} da ${SORGENTI.join(" o ")} (puoi indicare un altro sito con ASSETS_SOURCE)`,
  );
}

let mancanti = 0;

for (const { url, dest } of FILES) {
  if (await esiste(dest)) {
    console.log(`già presente: ${dest}`);
    continue;
  }
  const { buf, da } = await scarica(url);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  mancanti += 1;
  console.log(`scaricato: ${dest} (${buf.length} byte da ${da})`);
}

console.log(mancanti ? `pronte ${mancanti} immagini` : "niente da scaricare");
