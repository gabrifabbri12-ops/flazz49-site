import { motion } from "framer-motion";
import { Blocks, Crosshair, Languages, MessageCircle, Swords } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PUBLIC_STATS } from "../data";

const CHIPS = [
  { icon: Crosshair, label: "Fortnite" },
  { icon: MessageCircle, label: "Just Chatting" },
  { icon: Blocks, label: "Minecraft" },
  { icon: Swords, label: "Chess" },
  { icon: Languages, label: "Duolingo" },
];

export default function About() {
  return (
    <section id="chi-sono" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-twitch/15 blur-[150px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 flex items-center justify-center lg:order-1"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src="/images/flazzo-about.png"
              alt="Flazzo_49"
              className="relative mx-auto w-64 sm:w-80 lg:w-96"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-line bg-panel/90 px-5 py-2 backdrop-blur-xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-twitch">
                @flazzo_49
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            kicker="Chi sono"
            title={
              <>
                Ciao, sono <span className="text-twitch">Flazzo</span>.<br />
                <span className="text-stroke">Il classico chill guy.</span>
              </>
            }
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            <p>
              Un chill guy che non paga le tasse e che cerca sempre di farti divertire :) 💙🔥
            </p>
            <p className="text-white">
              Live al pomeriggio tra Fortnite, Just Chatting, Minecraft e la community.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {CHIPS.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-twitch/60 hover:text-white"
              >
                <chip.icon className="h-4 w-4 text-twitch" />
                {chip.label}
              </motion.span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/60 sm:grid-cols-4">
            {PUBLIC_STATS.map((stat, i) => (
              <motion.a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-panel px-5 py-6 transition-colors hover:bg-twitch/10"
              >
                <p className={`font-display text-2xl font-extrabold sm:text-3xl ${stat.accent}`}>
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {stat.label}
                </p>
              </motion.a>
            ))}
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
            Dati pubblici verificati sui profili collegati
          </p>
        </div>
      </div>
    </section>
  );
}
