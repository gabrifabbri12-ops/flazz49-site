// Le due immagini pesanti (foto "chi sono" e immagine Open Graph) non stanno nel
// repository: vengono prese dal sito già pubblicato, così restano identiche a
// quelle online e il repository contiene solo testo.
//
// Per averle versionate basta copiarle dentro public/ (public/og.png e
// public/images/flazzo-about.png): lo script salta i file già presenti.

import { mkdir, access, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE = process.env.ASSETS_SOURCE ?? "https://flazz49.netlify.app";

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

let mancanti = 0;

for (const { url, dest } of FILES) {
  if (await esiste(dest)) {
    console.log(`già presente: ${dest}`);
    continue;
  }
  const res = await fetch(SITE + url);
  if (!res.ok) {
    throw new Error(`impossibile scaricare ${SITE}${url}: HTTP ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  mancanti += 1;
  console.log(`scaricato: ${dest} (${buf.length} byte)`);
}

console.log(mancanti ? `pronte ${mancanti} immagini` : "niente da scaricare");
