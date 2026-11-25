import { motion } from "framer-motion";
import { ArrowUpRight, BellRing, Sun, Zap } from "lucide-react";
import { LINKS } from "../data";
import { DiscordIcon, TwitchIcon } from "./icons";

export default function Schedule() {
  return (
    <section id="palinsesto" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-twitch/15 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="border-y border-line py-16 text-center sm:py-24"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-twitch/40 bg-twitch/10 text-twitch">
            <Sun className="h-6 w-6" />
          </div>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.35em] text-twitch">
            Le live di Flazzo_49
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Le live sono <span className="text-twitch">al pomeriggio</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Segui Twitch e unisciti al Discord per sapere quando parte la live.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-twitch px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.55)]"
            >
              <TwitchIcon className="h-5 w-5" />
              Apri Twitch
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-blurple/60 bg-blurple/10 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:bg-blurple/20"
            >
              <DiscordIcon className="h-5 w-5 text-blurple" />
              Avvisi su Discord
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Entra appena parte */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto -mt-2 max-w-3xl"
        >
          <div className="glow-border relative overflow-hidden rounded-3xl border border-twitch/40 bg-panel/80 p-8 text-center backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-twitch/30 blur-[80px]" />
            <div className="relative">
              <div className="mx-auto flex items-center justify-center gap-3">
                <span className="h-2 w-2 rounded-full bg-twitch animate-pulse" />
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-twitch">
                  Appena parte la live
                </p>
                <span className="h-2 w-2 rounded-full bg-twitch animate-pulse" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Entra subito <span className="text-twitch">in live</span>
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
                Attiva la campanella su Twitch e il ping su Discord: appena accendo la cam entri e
                la serata — anzi, il pomeriggio — può iniziare.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={LINKS.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl bg-twitch px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
                >
                  <Zap className="h-4 w-4" />
                  Entra in live
                </a>
                <a
                  href={LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-line bg-panel px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:border-blurple/60 hover:text-blurple"
                >
                  <BellRing className="h-4 w-4" />
                  Attiva gli avvisi
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
