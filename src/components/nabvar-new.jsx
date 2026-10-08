"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Work", href: "#work" },
  { name: "Lab", href: "#lab" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-background/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
        <Link href="#home" className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          A<span className="text-accent">/</span>H
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.slice(1).map((link) => (
            <a key={link.name} href={link.href} className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition hover:text-primary">
              {link.name}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="grid h-9 w-9 place-items-center rounded-full border border-line text-primary transition hover:border-accent hover:text-accent md:hidden"
        >
          <span className={`block h-px w-4 bg-current transition ${open ? "translate-y-px rotate-45" : ""}`} />
          <span className={`mt-1 block h-px w-4 bg-current transition ${open ? "-translate-y-px -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-line bg-surface/95 p-4 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line px-4 py-4 font-display text-2xl transition last:border-0 hover:text-accent"
              >
                {link.name}
                <span className="font-mono text-xs text-accent">↗</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
