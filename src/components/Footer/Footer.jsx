import { ArrowUp, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-plum/10 bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-plum"
        >
          LLSDM<span className="text-rose">.</span>
        </a>

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-center text-xs text-plum/50">
          © {currentYear} Lin Let Sandar Myint
          <span className="hidden sm:inline">Built with</span>
          <Heart
            size={12}
            className="hidden text-rose sm:block"
            fill="currentColor"
          />
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xs font-bold text-plum transition-colors hover:text-rose"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-plum/10 transition-all group-hover:border-pink group-hover:bg-blush">
            <ArrowUp
              size={15}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
