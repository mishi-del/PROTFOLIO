"use client";

import { motion } from "framer-motion";

const visualThemes = {
  agricultural: "from-[#ff6b5f]/20 via-[#5a3152] to-[#111025]",
  skincare: "from-[#a78bfa]/20 via-[#31455b] to-[#111025]",
  support: "from-[#ff6b5f]/20 via-[#3d344d] to-[#111025]",
  aquarium: "from-[#a78bfa]/20 via-[#24404b] to-[#111025]",
  resume: "from-[#ff6b5f]/15 via-[#4c3541] to-[#111025]",
  flags: "from-[#ff6b5f]/15 via-[#3f4c48] to-[#111025]",
  finance: "from-[#a78bfa]/15 via-[#3a4056] to-[#111025]",
  game: "from-[#ff6b5f]/15 via-[#4b3748] to-[#111025]",
};

export default function ProjectCard({ project, index, featured }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.75, delay: (index % 2) * 0.08 }}
      className={`group grid overflow-hidden rounded-[2rem] border border-line bg-surface lg:grid-cols-2 ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div className={`relative min-h-[320px] overflow-hidden bg-gradient-to-br p-8 sm:p-12 lg:min-h-[550px] ${visualThemes[project.accent]}`}>
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute inset-0 grid place-items-center">
          <motion.div
            whileHover={{ scale: 1.06, rotate: 4 }}
            className="relative grid h-56 w-56 place-items-center rounded-full border border-white/20 bg-[#080712]/35 shadow-[0_0_100px_rgba(255,107,95,0.18)] sm:h-72 sm:w-72"
          >
            <div className="absolute inset-8 rounded-full border border-dashed border-accent/50" />
            <span className="font-display text-5xl font-semibold text-accent sm:text-7xl">{project.index}</span>
          </motion.div>
        </div>
        <div className="relative flex items-end justify-between text-xs text-muted">
          <span className="font-mono tracking-[0.18em]">{project.type}</span>
          <span className="font-mono tracking-[0.18em]">{featured ? "FEATURED" : "ARCHIVE"}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
        <div>
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.role || "Developer"}</p>
              <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{project.name}</h3>
            </div>
            <span className="font-mono text-xs text-muted">{project.index}</span>
          </div>
          <p className="mt-7 text-lg leading-8 text-muted">{project.description}</p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 6).map((item) => (
              <span key={item} className="rounded-full border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-text-secondary">
                {item}
              </span>
            ))}
          </div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 border-b border-accent pb-2 font-mono text-xs uppercase tracking-[0.16em] text-primary transition hover:text-accent"
            >
              Visit live project
              <span aria-hidden="true" className="text-accent">↗</span>
            </a>
          ) : (
            <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Project details available on request</p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
