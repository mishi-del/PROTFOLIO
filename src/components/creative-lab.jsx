"use client";

import { motion } from "framer-motion";
import { experiments } from "@/data/portfolio-data";

export default function CreativeLab() {
  return (
    <section id="lab" className="relative overflow-hidden bg-secondary px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
      <div className="pointer-events-none absolute -right-32 top-20 h-[34rem] w-[34rem] rounded-full border border-accent/10" />
      <div className="pointer-events-none absolute -right-20 top-36 h-[24rem] w-[24rem] rounded-full border border-accent/15" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">THE LAB</p>
          <h2 className="mt-6 font-display text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">Experiments beyond the obvious.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            A space for emerging interests—where development meets AI, interaction and new creative possibilities.
          </p>
        </div>

        <div className="mt-20 grid border-t border-line md:grid-cols-2 lg:mt-28">
          {experiments.map((experiment, index) => (
            <motion.article
              key={experiment.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group grid grid-cols-[auto_1fr] gap-6 border-b border-line py-9 first:md:border-r md:first:pr-12 md:[&:nth-child(2n)]:pl-12"
            >
              <span className="font-mono text-xs text-accent">{experiment.number}</span>
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.035em] transition group-hover:text-accent sm:text-4xl">{experiment.name}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-muted">{experiment.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
