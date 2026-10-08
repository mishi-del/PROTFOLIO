"use client";

import { motion } from "framer-motion";

const principles = ["Learn continuously", "Build real things", "Experiment beyond the obvious", "Make technology feel human"];

export default function About() {
  return (
    <section id="about" className="bg-primary px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">MORE THAN A STACK</p>
          <h2 className="mt-6 font-display text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            A developer who learns by <span className="text-muted">building.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Abiha’s journey began with self-learning and expanded into structured software development, full-stack applications, AI, interactive experiences and digital products. She enjoys taking an idea and turning it into something people can actually interact with.
          </p>
        </div>

        <div className="border-t border-line">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center justify-between border-b border-line py-7"
            >
              <span className="font-display text-2xl font-medium sm:text-3xl">{principle}</span>
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
