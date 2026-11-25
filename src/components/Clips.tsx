import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Eye, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { LINKS, TWITCH_CLIPS } from "../data";
import { TwitchIcon } from "./icons";

type Clip = (typeof TWITCH_CLIPS)[number];

function ClipCard({ clip, index }: { clip: Clip; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
  const rotY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.a
      href={clip.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      className="group block"
    >
      <div className="scanline relative aspect-video overflow-hidden rounded-2xl border border-line">
        <img
          src={clip.image}
          alt={clip.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />

        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-void/70 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-twitch backdrop-blur border border-twitch/40">
          <TwitchIcon className="h-3 w-3" />
          {clip.game}
        </span>
        <span className="absolute right-4 top-4 rounded-md bg-void/70 px-2.5 py-1 font-mono text-[11px] font-bold text-white backdrop-blur border border-white/10 tabular-nums">
          {clip.duration}
        </span>

        <span className="absolute inset-0 m-auto flex h-16 w-16 scale-75 items-center justify-center rounded-full bg-twitch/90 opacity-0 shadow-[0_0_40px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <Play className="ml-1 h-6 w-6 fill-white text-white" />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 px-1">
        <div>
          <h3 className="font-display text-base font-bold leading-snug text-white transition-colors group-hover:text-twitch sm:text-lg">
            {clip.title}
          </h3>
          <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
            <Eye className="h-3.5 w-3.5" />
            {clip.views} visualizzazioni su Twitch
          </p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-twitch" />
      </div>
    </motion.a>
  );
}

export default function Clips() {
  return (
    <section id="clip" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-magenta/10 blur-[150px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Clip Twitch"
          title={
            <>
              Clip del <span className="text-twitch">canale</span>
            </>
          }
          description="Titoli, anteprime e link arrivano dalla pagina pubblica di Flazzo_49 su Twitch. Premi una clip per guardarla."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3" style={{ perspective: 1200 }}>
          {TWITCH_CLIPS.map((clip, i) => (
            <ClipCard key={clip.title} clip={clip} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href={LINKS.clips}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-twitch/40 bg-twitch/10 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-twitch transition-all hover:border-twitch hover:bg-twitch/20 hover:text-white"
          >
            Vedi tutte le clip del canale
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
