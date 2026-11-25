import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "../data";
import { DiscordIcon, TiktokIcon, TwitchIcon } from "./icons";

const SOCIALS = [
  { icon: TwitchIcon, label: "Twitch", href: LINKS.twitch, handle: "twitch.tv/flazzo_49", accent: "hover:text-twitch hover:border-twitch/60" },
  { icon: DiscordIcon, label: "Discord", href: LINKS.discord, handle: "discord.com/invite/aEJZbSbsRd", accent: "hover:text-blurple hover:border-blurple/60" },
  { icon: TiktokIcon, label: "TikTok", href: LINKS.tiktok, handle: "@Flazzo_49", accent: "hover:text-neon hover:border-neon/60" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/60 bg-abyss/40">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-twitch/15 blur-[160px]" />

      {/* giant CTA */}
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-twitch"
        >
          {"// Ci si vede in live"}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          href={LINKS.twitch}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-block"
        >
          <span className="glitch block font-display text-4xl font-black uppercase leading-none text-white transition-colors sm:text-6xl lg:text-7xl" data-text="SEGUICI IL CAOS">
            SEGUICI IL CAOS
          </span>
          <span className="mt-3 flex items-center justify-center gap-2 font-mono text-sm text-zinc-400 transition-colors group-hover:text-twitch">
            twitch.tv/flazzo_49
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </motion.a>
      </div>

      {/* socials grid */}
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {SOCIALS.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group flex items-center gap-4 rounded-2xl border border-line bg-panel/60 px-5 py-4 transition-all duration-300 hover:-translate-y-1 ${social.accent}`}
            >
              <social.icon className="h-5 w-5" />
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-white">
                  {social.label}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-zinc-500">{social.handle}</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 text-zinc-600 transition-all group-hover:text-current" />
            </motion.a>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/50 pt-8 sm:flex-row">
          <p className="font-display text-xs font-bold tracking-widest text-zinc-500">
            FLAZZO<span className="text-twitch">_49</span>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            Flazzo_49 © {new Date().getFullYear()} — Twitch, Discord e TikTok ufficiali
          </p>
          <a
            href="#top"
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-twitch"
          >
            Torna su ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
