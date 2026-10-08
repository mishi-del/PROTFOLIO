"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 80, damping: 25, mass: 0.2 });
  const smoothY = useSpring(cursorY, { stiffness: 80, damping: 25, mass: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbitalX = useTransform(scrollYProgress, [0, 0.5], [0, 220]);
  const orbitalY = useTransform(scrollYProgress, [0, 0.5], [0, -180]);
  const titleY = useTransform(scrollYProgress, [0, 0.45], [0, -130]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.08, 0.42], [0, 1, 0]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    cursorX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    cursorY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-[115vh] overflow-hidden bg-primary px-5 pb-24 pt-32 sm:px-8 lg:px-16 lg:pt-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,95,0.19),transparent_28%),radial-gradient(circle_at_25%_75%,rgba(167,139,250,0.16),transparent_30%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:80px_80px]" />

      <motion.div style={{ x: smoothX, y: smoothY }} className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[48rem] sm:w-[48rem]">
        <motion.div style={{ x: orbitalX, y: orbitalY }} className="absolute inset-16 rounded-full border border-dashed border-accent/30 sm:inset-24" />
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_30px_rgba(255,107,95,0.75)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-between">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">FULL-STACK DEVELOPER · AI & TECH ENTHUSIAST</p>
          <h1 className="mt-7 font-display text-balance text-[clamp(4.6rem,15vw,12rem)] font-semibold leading-[0.75] tracking-[-0.085em]">
            ABIHA<br />EMAN<br />HASHMI
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-muted sm:text-2xl sm:leading-9">
            Building digital experiences across full-stack development, AI and creative technology.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col gap-8 border-t border-line pt-7 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-primary-500 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-background transition hover:bg-accent hover:text-primary">
              Explore my work
            </a>
            <a href="#journey" className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary transition hover:border-accent hover:text-accent">
              View journey
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Paused · Building what’s next</span>
          </div>
        </div>
      </div>
    </section>
  );
}
