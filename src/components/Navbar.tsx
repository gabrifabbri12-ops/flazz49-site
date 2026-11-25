import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import { LINKS } from "../data";
import { DiscordIcon, TiktokIcon } from "./icons";

const NAV_LINKS = [
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Live al pomeriggio", href: "#palinsesto" },
  { label: "Clip", href: "#clip" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/70 bg-void/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-twitch to-blurple font-display text-sm font-black text-white shadow-[0_0_24px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:rotate-[-8deg]">
              F49
            </span>
            <span className="font-display text-sm font-bold tracking-widest text-white">
              FLAZZO<span className="text-twitch">_49</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-zinc-300 transition-all hover:border-blurple hover:text-blurple hover:shadow-[0_0_18px_rgba(88,101,242,0.4)]"
              aria-label="Discord"
            >
              <DiscordIcon className="h-4 w-4" />
            </a>
            <a
              href={LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-zinc-300 transition-all hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
              aria-label="TikTok di Flazzo_49"
            >
              <TiktokIcon className="h-4 w-4" />
            </a>
            <a
              href={LINKS.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-lg bg-twitch px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:shadow-[0_0_28px_rgba(59,130,246,0.65)]"
            >
              <Radio className="h-4 w-4" />
              Twitch
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white lg:hidden"
            aria-label="Apri menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-sm font-bold tracking-widest text-white">
                FLAZZO<span className="text-twitch">_49</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white"
                aria-label="Chiudi menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                  className="py-3 font-display text-3xl font-extrabold uppercase text-white transition-colors hover:text-twitch"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={LINKS.twitch}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.45 }}
                className="mt-6 flex items-center gap-3 rounded-xl bg-twitch px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              >
                <Radio className="h-4 w-4" />
                Guarda la live
              </motion.a>
              <motion.a
                href={LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.45 }}
                className="mt-3 flex items-center gap-3 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-white"
              >
                <TiktokIcon className="h-4 w-4 text-cyan-300" />
                Apri TikTok
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
