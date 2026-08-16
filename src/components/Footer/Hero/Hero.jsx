import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { SiReact } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cream text-plum"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:pt-20">
        {/* =========================
            LEFT — INTRODUCTION
        ========================= */}
        <div className="text-center lg:text-left">
          <div className="mb-5 flex items-center justify-center gap-2 text-xs font-extrabold tracking-[0.2em] text-rose lg:justify-start">
            <Sparkles size={16} />
            FULL-STACK DEVELOPER
          </div>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Hi, I'm
            <br />
            <span className="text-rose">Lin Let Sandar Myint</span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold sm:text-2xl">
            Full-Stack Developer & AI Enthusiast
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-plum/65 sm:text-base lg:mx-0">
            I build modern, practical web applications and AI-powered solutions
            using React, Node.js, Spring Boot, databases, and modern
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-pink px-6 py-3.5 font-bold text-plum transition-all duration-300 hover:-translate-y-1 hover:bg-rose hover:text-white"
            >
              Download CV
              <ArrowDown size={17} />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-plum/15 px-6 py-3.5 font-bold text-plum transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:bg-blush"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* =========================
            RIGHT — PHOTO
        ========================= */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Background shape */}
          <div className="absolute inset-4 rotate-3 rounded-[30%_20%_30%_20%] bg-blush" />

          {/* Photo */}
          <div className="relative aspect-[0.82] -rotate-2 overflow-hidden rounded-[28px] border-8 border-white bg-pink shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Lin Let Sandar"
              className="h-full w-full object-cover"
            />
          </div>

          {/* React */}
          <div className="absolute left-0 top-16 flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2.5 text-xs font-bold text-plum shadow-lg backdrop-blur">
            <SiReact size={18} color="black" />
            React
          </div>
          {/* Spring Boot */}
          <div className="absolute right-0 top-1/2 rounded-xl bg-white/90 px-4 py-2.5 text-xs font-bold text-plum shadow-lg backdrop-blur">
            ◆ Spring Boot
          </div>

          {/* Node */}
          <div className="absolute bottom-20 left-0 rounded-xl bg-white/90 px-4 py-2.5 text-xs font-bold text-plum shadow-lg backdrop-blur">
            ● Node.js
          </div>

          {/* AI */}
          <div className="absolute bottom-4 right-4 rounded-xl bg-white/90 px-4 py-2.5 text-xs font-bold text-plum shadow-lg backdrop-blur">
            ✦ AI
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-plum/50 lg:flex"
      >
        Scroll to explore
        <ArrowDown className="animate-bounce text-rose" size={17} />
      </a>
    </section>
  );
}

export default Hero;
