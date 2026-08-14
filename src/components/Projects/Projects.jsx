import { ArrowRight } from "lucide-react";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================= */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-rose">
              SELECTED WORK
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-plum sm:text-5xl">
              Things I've
              <span className="text-rose"> built.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-plum/60 sm:text-base">
              A selection of projects where I applied my skills to solve
              practical problems and build complete software experiences.
            </p>
          </div>

          {/* Project count */}
          <div className="hidden rounded-2xl border border-plum/10 bg-cream px-6 py-4 text-right sm:block">
            <p className="text-3xl font-extrabold text-rose">
              {featuredProjects.length}+
            </p>

            <p className="text-xs font-semibold text-plum/50">
              Featured Projects
            </p>
          </div>
        </div>

        {/* =========================
            PROJECT GRID
        ========================= */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* =========================
            MORE PROJECTS
        ========================= */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-xl border border-plum/10 px-6 py-3.5 text-sm font-bold text-plum transition-all duration-300 hover:border-pink hover:bg-blush"
          >
            View More Projects
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
