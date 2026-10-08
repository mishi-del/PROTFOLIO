"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    description: "Interfaces that feel fast, responsive and deliberately designed.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "GSAP", "Three.js", "Responsive UI"],
  },
  {
    name: "Backend",
    description: "Practical services, data flows and APIs built for real applications.",
    technologies: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    name: "Full Stack",
    description: "End-to-end products connecting experience, architecture and data.",
    technologies: ["MERN Stack", "Authentication", "APIs", "Database Architecture"],
  },
  {
    name: "AI",
    description: "Intelligent systems, workflows and emerging AI-powered products.",
    technologies: ["Artificial Intelligence", "AI Agents", "Automation", "AI-powered Applications"],
  },
  {
    name: "Creative Technology",
    description: "Motion, interaction and WebGL experiences that make ideas tangible.",
    technologies: ["Three.js", "WebGL", "GSAP", "Interactive Experiences", "Motion"],
  },
  {
    name: "Other",
    description: "The foundation tools used to plan, build and collaborate.",
    technologies: ["Python", "C#", "Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-secondary px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">WHAT I BUILD WITH</p>
            <h2 className="mt-6 font-display text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl">
              Technology is a <span className="text-muted">toolkit</span>, not the story.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              The focus is not a list of certifications or percentages. It is the ability to move from an idea to a working, useful experience across code, AI and interaction.
            </p>
          </div>

          <div className="space-y-3">
            {categories.map((category, index) => (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: (index % 2) * 0.08 }}
                className="group grid gap-8 rounded-[1.75rem] border border-line bg-primary/60 p-6 transition duration-500 hover:border-accent/50 hover:bg-primary sm:p-9 lg:grid-cols-[0.72fr_1.28fr]"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{category.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{category.description}</p>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-line px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.09em] text-text-secondary transition duration-300 group-hover:border-accent/50 group-hover:text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
