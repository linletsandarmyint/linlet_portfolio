import { Code2, Server, Sparkles, Database, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications from responsive user interfaces to backend services and database integration.",
  },
  {
    number: "02",
    icon: Server,
    title: "Backend & API Development",
    description:
      "Designing REST APIs, authentication, business logic, and reliable backend systems using modern technologies.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI-Powered Applications",
    description:
      "Integrating AI into practical applications to create smarter features and more useful user experiences.",
  },
  {
    number: "04",
    icon: Database,
    title: "Database & System Design",
    description:
      "Designing data structures and connecting applications with relational and NoSQL databases.",
  },
];

function WhatIDo() {
  return (
    <section
      id="services"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-rose">
            WHAT I DO
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-plum sm:text-5xl">
            I turn ideas into
            <span className="text-rose"> working solutions.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-plum/60 sm:text-base">
            I enjoy building practical software that combines clean interfaces,
            reliable backend systems, thoughtful data design, and emerging AI
            technologies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative rounded-2xl border border-plum/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink hover:shadow-xl hover:shadow-pink/10"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-rose/60">
                    {service.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-plum/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rose"
                  />
                </div>

                {/* Icon */}
                <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-xl bg-blush text-rose transition-colors duration-300 group-hover:bg-pink">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-plum">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-plum/60">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
