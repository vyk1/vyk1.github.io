"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsGrid.module.css";

type ProjectsGridProps = {
  projects: Project[];
  basePath?: string;
  todosLabel?: string;
};

export default function ProjectsGrid({ projects, basePath = "/projetos", todosLabel = "todos" }: ProjectsGridProps) {
  const [activeStack, setActiveStack] = useState<string | null>(null);

  const allStacks = useMemo(() => {
    const stacks = new Set<string>();
    projects.forEach((project) => project.stack.forEach((tech) => stacks.add(tech)));
    return Array.from(stacks).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const filteredProjects = activeStack
    ? projects.filter((project) => project.stack.includes(activeStack))
    : projects;

  return (
    <div>
      {allStacks.length > 0 && (
        <div className={styles.filters}>
          <button
            type="button"
            onClick={() => setActiveStack(null)}
            className={`${styles.filterButton} ${activeStack === null ? styles.filterButtonActive : ""}`}
          >
            {todosLabel}
          </button>
          {allStacks.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setActiveStack(tech)}
              className={`${styles.filterButton} ${activeStack === tech ? styles.filterButtonActive : ""}`}
            >
              {tech}
            </button>
          ))}
        </div>
      )}
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} basePath={basePath} />
        ))}
      </div>
    </div>
  );
}
