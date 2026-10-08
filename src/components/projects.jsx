"use client";

import ProjectCard from "@/components/project-card";
import { projects } from "@/data/portfolio-data";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="relative bg-primary px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">SELECTED WORK</p>
            <h2 className="mt-6 font-display text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Ideas, made <span className="text-muted">tangible.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            Selected projects where development, AI, motion and visual storytelling meet. The archive below contains additional work supplied for the portfolio.
          </p>
        </div>

        <div className="mt-24 space-y-8 lg:mt-36">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} featured />
          ))}
        </div>

        <div className="mt-28 border-t border-line pt-24">
          <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">PROJECT ARCHIVE</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">More work, more ways to build.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">Additional supplied projects are presented as a focused archive rather than inflated case studies.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {archiveProjects.map((project) => (
              <article key={project.name} className="group rounded-[1.5rem] border border-line bg-surface p-6 transition hover:border-accent/50 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{project.type}</p>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em]">{project.name}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted">{project.index}</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted">{project.description}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary transition hover:text-accent">
                    Open project <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
