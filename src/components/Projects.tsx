import { projects, type ProjectStatus } from "@/data/projects";

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  planned: "Planned",
};

const statusClass: Record<ProjectStatus, string> = {
  live: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "in-progress":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  planned:
    "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400",
};

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col gap-3 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-medium">{project.name}</h3>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusClass[project.status]}`}
              >
                {statusLabel[project.status]}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex gap-4 pt-3 text-sm font-medium">
              {project.github ? (
                <a
                  href={project.github}
                  className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
                >
                  Code
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
                >
                  Live demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
