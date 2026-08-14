import { ArrowUpRight, Code2, Heart, Lightbulb } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =========================
              LEFT — PHOTO
          ========================= */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-blush" />

            <div className="relative overflow-hidden rounded-[28px] border-8 border-cream bg-pink shadow-xl">
              <img
                src="/profile.jpg"
                alt="Lin Let Sandar"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-plum/10 bg-white p-4 shadow-xl sm:-right-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-rose">
                  <Code2 size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold text-plum">Always building</p>

                  <p className="text-[11px] text-plum/50">
                    Web • AI • Software
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT — CONTENT
          ========================= */}
          <div>
            <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-rose">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-plum sm:text-5xl">
              More than just
              <span className="text-rose"> code.</span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-plum/60 sm:text-base">
              <p>
                I'm a developer who enjoys turning ideas into practical
                software. I like understanding how different parts of an
                application work together — from the user interface to the
                backend and database.
              </p>

              <p>
                My main interests are full-stack development, AI-powered
                applications, backend engineering, and building systems that
                solve real problems.
              </p>

              <p>
                I'm continuously learning new technologies and improving my
                development skills by building, experimenting, and working on
                real projects.
              </p>
            </div>

            {/* Personal values */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-plum/10 bg-cream p-5">
                <Lightbulb size={21} className="text-rose" />

                <h3 className="mt-4 font-bold text-plum">Curious</h3>

                <p className="mt-2 text-xs leading-5 text-plum/55">
                  I enjoy exploring new technologies and understanding how
                  things work.
                </p>
              </div>

              <div className="rounded-2xl border border-plum/10 bg-cream p-5">
                <Heart size={21} className="text-rose" />

                <h3 className="mt-4 font-bold text-plum">Purpose-driven</h3>

                <p className="mt-2 text-xs leading-5 text-plum/55">
                  I prefer building useful applications that solve meaningful
                  problems.
                </p>
              </div>
            </div>

            {/* CV link */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-xl bg-pink px-6 py-3.5 text-sm font-bold text-plum transition-all duration-300 hover:-translate-y-1 hover:bg-rose hover:text-white"
              >
                Download My CV
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
