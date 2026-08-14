import { Sparkles, Code2 } from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { skillCategories } from "../../data/skills";

/* =========================================================
   TECHNOLOGY ICONS + ORIGINAL BRAND COLORS
========================================================= */

const iconMap = {
  react: {
    icon: SiReact,
    color: "#61DAFB",
  },

  javascript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  html5: {
    icon: SiHtml5,
    color: "#E34F26",
  },

  css3: {
    icon: SiCss,
    color: "#1572B6",
  },

  tailwind: {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  nodejs: {
    icon: SiNodedotjs,
    color: "#339933",
  },

  express: {
    icon: SiExpress,
    color: "#111111",
  },

  /*
   * Java icon is not available in your current
   * react-icons export, so use a clean code icon.
   */
  java: {
    icon: Code2,
    color: "#E76F00",
  },

  spring: {
    icon: SiSpringboot,
    color: "#6DB33F",
  },

  mongodb: {
    icon: SiMongodb,
    color: "#47A248",
  },

  mysql: {
    icon: SiMysql,
    color: "#4479A1",
  },

  postgresql: {
    icon: SiPostgresql,
    color: "#4169E1",
  },

  git: {
    icon: SiGit,
    color: "#F05032",
  },

  github: {
    icon: SiGithub,
    color: "#181717",
  },

  postman: {
    icon: SiPostman,
    color: "#FF6C37",
  },

  /*
   * AI doesn't have one universal technology logo.
   * Keep Lucide Sparkles for now.
   */
  ai: {
    icon: Sparkles,
    color: "#C084FC",
  },
};

function TechStack() {
  return (
    <section
      id="stack"
      className="bg-cream px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADING
        ================================================= */}

        <div className="text-center">
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-rose">
            TECH STACK
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-plum sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-plum/60 sm:text-base">
            A collection of technologies and tools I use to design, develop,
            test, and deploy modern applications.
          </p>
        </div>

        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-2xl
                border border-plum/10
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-pink/10
              "
            >
              {/* Category title */}

              <h3 className="text-lg font-bold text-plum">{category.title}</h3>

              {/* Skills */}

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const technology = iconMap[skill.icon];

                  /*
                   * Safety check:
                   * If an icon doesn't exist, don't crash the page.
                   */
                  if (!technology) {
                    return (
                      <div
                        key={skill.name}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-plum/10
                          bg-cream
                          px-3
                          py-2
                        "
                      >
                        <span className="text-xs font-semibold text-plum">
                          {skill.name}
                        </span>
                      </div>
                    );
                  }

                  const Icon = technology.icon;
                  const iconColor = technology.color;

                  return (
                    <div
                      key={skill.name}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-plum/10
                        bg-cream
                        px-3
                        py-2
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-pink
                        hover:bg-blush
                      "
                    >
                      {/* Technology icon */}

                      <Icon
                        size={18}
                        color={iconColor}
                        aria-hidden="true"
                        className="
                          shrink-0
                          transition-transform
                          duration-200
                          group-hover:scale-110
                        "
                      />

                      {/* Technology name */}

                      <span
                        className="
                          text-xs
                          font-semibold
                          text-plum
                        "
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div
          className="
            mt-12
            rounded-2xl
            border border-pink/40
            bg-blush
            p-6
            text-center
            sm:p-8
          "
        >
          <div className="flex justify-center">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-pink
                text-plum
              "
            >
              <Sparkles size={20} />
            </div>
          </div>

          <h3 className="mt-4 text-lg font-bold text-plum">
            Always learning, always building.
          </h3>

          <p
            className="
              mx-auto
              mt-2
              max-w-xl
              text-sm
              leading-6
              text-plum/60
            "
          >
            I'm continuously exploring new technologies and looking for better
            ways to build useful, reliable, and engaging software.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
