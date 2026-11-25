import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 160);
      y.set(e.clientY - 160);
      setVisible(true);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className={`pointer-events-none fixed left-0 top-0 z-0 h-80 w-80 rounded-full bg-twitch/10 blur-[90px] transition-opacity duration-500 max-lg:hidden ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
