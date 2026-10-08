"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    year: "2024",
    eyebrow: "THE BEGINNING",
    title: "Curiosity became the starting point.",
    description:
      "Abiha began her technology journey through self-learning at home—exploring Artificial Intelligence through online courses, tutorials and YouTube, then discovering Python and the foundations of programming.",
    tags: ["Self-learning", "Artificial Intelligence", "Python", "Programming"],
  },
  {
    year: "2025",
    eyebrow: "BUILDING WITH STRUCTURE",
    title: "Learning became building.",
    description:
      "She started a three-year diploma at APTECH and completed Web Development and Web & App Development courses through Saylani, moving from concepts into real applications and interactive websites.",
    tags: ["APTECH", "Web Development", "Full-Stack", "MERN Stack"],
  },
  {
    year: "2026",
    eyebrow: "BEYOND THE STACK",
    title: "Building beyond the stack.",
    description:
      "Abiha continues developing full-stack applications while exploring AI agents, automation, interactive interfaces, 3D experiences and creative technology through her current AI Agentic course at Saylani.",
    tags: ["AI Agents", "Automation", "3D Web", "Creative Technology"],
  },
];

export default function Journey() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const titleY = useTransform(scrollYProgress, [0, 0.42, 1], [80, 0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.35, 0.65], [0, 1, 1, 0]);

  return (
    <section id="journey" ref={sectionRef} className="relative bg-secondary">
      <div className="sticky top-0 z-10 flex min-h-screen items-center overflow-hidden px-5 py-24 sm:px-8 lg:px-16">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="mx-auto w-full max-w-7xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent">THE JOURNEY · 2024—2026</p>
          <h2 className="max-w-5xl font-display text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[8rem]">
            Every project started with <span className="text-muted">curiosity.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative z-20 bg-primary px-5 pb-28 sm:px-8 lg:px-16 lg:pb-40">
        <div className="mx-auto max-w-7xl">
          {chapters.map((chapter, index) => (
            <motion.article
              key={chapter.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="grid gap-8 border-t border-line py-20 md:grid-cols-[0.58fr_1.42fr] md:gap-16 md:py-32"
            >
              <div>
                <span className="font-mono text-sm text-accent">{chapter.year}</span>
                <p className="mt-5 max-w-xs text-xs uppercase tracking-[0.2em] text-muted">{chapter.eyebrow}</p>
              </div>
              <div>
                <h3 className="font-display text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">{chapter.title}</h3>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{chapter.description}</p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {chapter.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="overflow-hidden border-t border-line py-28 text-center md:py-40"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">NEXT</p>
            <h3 className="mt-7 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">Build what’s next.</h3>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted">
              Continue building ambitious digital products, exploring deeper AI systems and turning ideas into experiences people can interact with.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
