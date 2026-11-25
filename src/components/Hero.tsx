import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Sun } from "lucide-react";
import { LINKS, PROFILE_IMAGE } from "../data";
import { DiscordIcon, TiktokIcon, TwitchIcon } from "./icons";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      className="bg-grid relative flex min-h-screen flex-col overflow-hidden pt-24"
    >
      {/* ambient orbs */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-twitch/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-blurple/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[380px] w-[520px] rounded-full bg-magenta/10 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 sm:px-8">
        {/* status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="flex items-center gap-2 rounded-full border border-twitch/40 bg-twitch/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-twitch">
            <Sun className="h-3.5 w-3.5" />
            Live al pomeriggio
          </span>
        </motion.div>

        {/* giant title */}
        <div className="relative text-center" style={{ perspective: 900 }}>
          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glitch font-display text-[15vw] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[11vw] lg:text-[9.5rem]"
            data-text="FLAZZO"
          >
            FLAZZO
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glitch text-stroke-purple font-display text-[15vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[11vw] lg:text-[9.5rem]"
            data-text="_49"
          >
            _49
          </motion.div>

          {/* floating avatar */}
          <motion.div
            style={{ rotateX: rotX, rotateY: rotY }}
            initial={{ opacity: 0, scale: 0.6, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-2 top-1/2 hidden -translate-y-1/2 md:block lg:-right-16"
          >
            <div className="animate-float">
              <div className="relative overflow-hidden rounded-2xl border border-line shadow-2xl">
                <img
                  src={PROFILE_IMAGE}
                  alt="Immagine profilo ufficiale di Flazzo_49 su Twitch"
                  className="h-36 w-36 object-cover lg:h-48 lg:w-48"
                />
              </div>
              <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-line bg-panel/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-neon backdrop-blur">
                <TwitchIcon className="h-3 w-3" />
                @flazzo_49
              </div>
            </div>
          </motion.div>
        </div>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Un <span className="text-white">chill guy</span> che non paga le tasse e che cerca
          sempre di farti divertire :) 💙🔥
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={LINKS.twitch}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-twitch px-9 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <TwitchIcon className="h-5 w-5" />
            Guarda la live
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-blurple/60 bg-blurple/10 px-9 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.04] hover:bg-blurple/20 hover:shadow-[0_0_50px_rgba(88,101,242,0.55)]"
          >
            <DiscordIcon className="h-5 w-5 text-blurple" />
            Entra nel Discord
          </a>
          <a
            href={LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-9 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.04] hover:bg-cyan-400/20 hover:shadow-[0_0_45px_rgba(34,211,238,0.4)]"
          >
            <TiktokIcon className="h-5 w-5 text-cyan-300" />
            TikTok
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#chi-sono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-twitch"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
