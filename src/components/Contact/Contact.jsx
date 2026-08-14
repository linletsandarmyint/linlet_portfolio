import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-cream px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================= */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-rose">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-plum sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="text-rose"> together.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-plum/60 sm:text-base">
            Have a project idea, an opportunity, or simply want to connect? I'd
            love to hear from you.
          </p>
        </div>

        {/* =========================
            CONTACT CONTENT
        ========================= */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =========================
              LEFT — CONTACT INFO
          ========================= */}
          <div className="rounded-3xl bg-plum p-7 text-white sm:p-9">
            <p className="text-xs font-bold tracking-[0.15em] text-pink">
              CONTACT DETAILS
            </p>

            <h3 className="mt-5 text-2xl font-extrabold">
              Let's start a conversation.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              I'm open to discussing development opportunities, interesting
              projects, collaborations, and ideas.
            </p>

            {/* Email */}
            <a
              href="mailto:linletsandarmyint@gmail.com"
              className="group mt-8 flex items-center gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-pink transition-colors group-hover:bg-pink group-hover:text-plum">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs text-white/40">Email</p>

                <p className="mt-1 text-sm font-semibold">
                  linletsandarmyint@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-pink">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-white/40">Location</p>

                <p className="mt-1 text-sm font-semibold">Yangon , Myanmar</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs text-white/40">Find me online</p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/letsandarmyint"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-bold transition-colors hover:border-pink hover:bg-pink hover:text-plum"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/letsandarmyint"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-bold transition-colors hover:border-pink hover:bg-pink hover:text-plum"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT — FORM
          ========================= */}
          <div className="rounded-3xl border border-plum/10 bg-white p-7 sm:p-9">
            <form
              action="mailto:linletsandarmyint@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold text-plum"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-plum/10 bg-cream px-4 py-3.5 text-sm text-plum outline-none transition-all placeholder:text-plum/30 focus:border-pink focus:ring-2 focus:ring-pink/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold text-plum"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-plum/10 bg-cream px-4 py-3.5 text-sm text-plum outline-none transition-all placeholder:text-plum/30 focus:border-pink focus:ring-2 focus:ring-pink/20"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-bold text-plum"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-xl border border-plum/10 bg-cream px-4 py-3.5 text-sm text-plum outline-none transition-all placeholder:text-plum/30 focus:border-pink focus:ring-2 focus:ring-pink/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold text-plum"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-plum/10 bg-cream px-4 py-3.5 text-sm text-plum outline-none transition-all placeholder:text-plum/30 focus:border-pink focus:ring-2 focus:ring-pink/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-pink px-6 py-3.5 text-sm font-bold text-plum transition-all duration-300 hover:-translate-y-1 hover:bg-rose hover:text-white"
              >
                Send Message
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>

        {/* =========================
            CTA
        ========================= */}
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-pink/40 bg-blush p-7 text-center sm:p-10">
          <p className="text-sm font-semibold text-plum/60">
            Looking for my resume?
          </p>

          <a
            href="/resume.pdf"
            download
            className="group mt-3 inline-flex items-center gap-2 text-lg font-extrabold text-rose"
          >
            Download my CV
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
