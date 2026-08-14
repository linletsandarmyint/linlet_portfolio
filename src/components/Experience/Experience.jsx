import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-cream px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================= */}
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-rose">
            EXPERIENCE
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-plum sm:text-5xl">
            My journey so far.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-plum/60 sm:text-base">
            My experience comes from a combination of professional development,
            academic work, and building real-world software projects.
          </p>
        </div>

        {/* =========================
            TIMELINE
        ========================= */}
        <div className="relative mt-14 lg:mt-20">
          {/* Desktop Timeline Line */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-pink/50 md:block" />

          <div className="space-y-10 md:space-y-14">
            {experiences.map((experience) => (
              <article key={experience.id} className="relative md:pl-16">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-cream bg-pink text-plum md:flex">
                  <BriefcaseBusiness size={17} />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-plum/10 bg-white p-6 transition-all duration-300 hover:border-pink hover:shadow-xl hover:shadow-pink/10 sm:p-8">
                  {/* Top Row */}
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      {/* Type */}
                      <span className="inline-block rounded-full bg-blush px-3 py-1.5 text-xs font-bold text-rose">
                        {experience.type}
                      </span>

                      {/* Role */}
                      <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-plum">
                        {experience.role}
                      </h3>

                      {/* Company */}
                      <p className="mt-1 text-base font-semibold text-rose">
                        {experience.company}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-plum/50">
                      <CalendarDays size={15} />
                      {experience.period}
                    </div>
                  </div>

                  {/* Location */}
                  {experience.location && (
                    <div className="mt-5 flex items-center gap-2 text-xs font-medium text-plum/50">
                      <MapPin size={15} />
                      {experience.location}
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-plum/60">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-cream px-3 py-1.5 text-[11px] font-semibold text-plum/70"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
