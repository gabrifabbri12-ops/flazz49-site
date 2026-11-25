import { motion } from "framer-motion";

interface SectionHeadingProps {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ kicker, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`font-mono text-xs font-medium tracking-[0.35em] text-twitch uppercase ${centered ? "" : ""}`}
      >
        {"// "}
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="mt-4 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
