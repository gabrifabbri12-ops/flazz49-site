import { motion } from "framer-motion";
import { ArrowUpRight, Gamepad2, MessageCircle, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { LINKS, PROFILE_IMAGE } from "../data";
import { DiscordIcon } from "./icons";

export default function DiscordSection() {
  return (
    <section id="community" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blurple/20 blur-[160px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionHeading
            kicker="Discord ufficiale"
            title={
              <>
                La Community <span className="text-blurple">Del Flazzone</span>
              </>
            }
            description="Chill guy. Cerco sempre di farti sorridere 😏"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-zinc-300"
          >
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blurple" />
              <strong className="text-white">125</strong> membri
            </span>
            <span className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4 text-blurple" />
              Tanti giochi
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-blurple" />
              Divertente e sarcastico
            </span>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blurple px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(88,101,242,0.6)]"
          >
            <DiscordIcon className="h-5 w-5" />
            Apri l'invito Discord
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
          <p className="mt-4 break-all font-mono text-[10px] tracking-[0.12em] text-zinc-600">
            discord.com/invite/aEJZbSbsRd
          </p>
        </div>

        <motion.a
          href={LINKS.discord}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 45, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="glow-border group block overflow-hidden rounded-3xl border border-line bg-panel p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-2"
        >
          <div className="flex items-center gap-5">
            <img
              src={PROFILE_IMAGE}
              alt="Flazzo_49"
              className="h-20 w-20 rounded-2xl border border-line object-cover"
            />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-blurple">
                Server Discord
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                La Community Del Flazzone
              </h3>
            </div>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-zinc-300">
            Un posto tranquillo per ridere e passare il tempo insieme.
          </p>
          <div className="mt-10 flex items-center justify-between border-t border-line pt-5">
            <span className="font-mono text-xs text-zinc-500">125 membri</span>
            <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-blurple">
              Unisciti
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
