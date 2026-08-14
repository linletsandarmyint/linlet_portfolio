import { ArrowUpRight,  ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-plum/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink/10">
      {/* =========================
          PROJECT IMAGE
      ========================= */}
      <div className="relative aspect-[16/9] overflow-hidden bg-blush">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-plum/0 transition-colors duration-300 group-hover:bg-plum/10" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-rose shadow-sm backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================= */}
      <div className="p-6 sm:p-7">
        {/* Number + Arrow */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.15em] text-plum/30">
            PROJECT {String(project.id).padStart(2, "0")}
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-rose transition-all duration-300 group-hover:bg-pink">
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-plum">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-plum/60">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-5 space-y-2">
          {project.highlights.slice(0, 3).map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-xs font-medium text-plum/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-pink" />
              {highlight}
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-cream px-2.5 py-1.5 text-[11px] font-semibold text-plum/70"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-3 border-t border-plum/10 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-plum/10 px-4 py-2.5 text-xs font-bold text-plum transition-colors hover:border-pink hover:bg-blush"
          >
            
            GitHub
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-pink px-4 py-2.5 text-xs font-bold text-plum transition-colors hover:bg-rose hover:text-white"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
