"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/mishi-del" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abiha-emaan-hashmi-160625325/" },
  { label: "Portfolio", href: "https://abiha-emaan-portfolio.vercel.app/" },
  { label: "YouTube", href: "https://www.youtube.com/@CodeWithAbiha" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-secondary px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />
      <div className="relative mx-auto max-w-7xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">LET’S BUILD SOMETHING</p>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-7 font-display text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[8rem]"
        >
          Build what’s <span className="text-muted">next.</span>
        </motion.h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted">
          Open to interesting projects, collaborations, creative technology, AI experiments and opportunities to build meaningful digital products.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-secondary transition hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row">
          <p>© 2026 ABIHA EMAN HASHMI</p>
          <p className="font-mono uppercase tracking-[0.16em]">Pakistan · Full-Stack Developer</p>
        </div>
      </div>
    </section>
  );
}
