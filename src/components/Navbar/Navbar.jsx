import { useEffect, useState } from "react";

import {
  Menu,
  X,
  Home,
  Sparkles,
  Layers3,
  FolderKanban,
  BriefcaseBusiness,
  UserRound,
  Mail,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "What I Do",
    href: "#services",
    icon: Sparkles,
  },
  {
    label: "Tech Stack",
    href: "#stack",
    icon: Layers3,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: FolderKanban,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    label: "About",
    href: "#about",
    icon: UserRound,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

const ITEMS_PER_PAGE = 2;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Which 2 navigation items are currently displayed
  const [menuPage, setMenuPage] = useState(0);

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MENU
  ===================================================== */

  const closeMenu = () => {
    setIsOpen(false);
    setMenuPage(0);
  };

  /* =====================================================
     OPEN / CLOSE MENU
  ===================================================== */

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  /* =====================================================
     PAGE CALCULATIONS
  ===================================================== */

  const totalPages = Math.ceil(navItems.length / ITEMS_PER_PAGE);

  const startIndex = menuPage * ITEMS_PER_PAGE;

  const visibleItems = navItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const isFirstPage = menuPage === 0;

  const isLastPage = menuPage === totalPages - 1;

  /* =====================================================
     NEXT PAGE
  ===================================================== */

  const nextPage = () => {
    if (!isLastPage) {
      setMenuPage((prev) => prev + 1);
    }
  };

  /* =====================================================
     PREVIOUS PAGE
  ===================================================== */

  const previousPage = () => {
    if (!isFirstPage) {
      setMenuPage((prev) => prev - 1);
    }
  };

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50

          transition-all
          duration-300

          ${
            scrolled
              ? "bg-white/90 shadow-sm backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between

            px-5
            sm:px-8

            transition-all
            duration-300

            ${scrolled ? "py-3" : "py-5"}
          `}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            onClick={closeMenu}
            className="
              text-xl
              font-extrabold
              tracking-tight
              text-plum
            "
          >
            lls<span className="text-rose">dm</span>
          </a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-xs
                  font-bold
                  text-plum/60

                  transition-colors
                  duration-200

                  hover:text-rose
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={toggleMenu}
            className={`
              flex
              items-center
              justify-center

              rounded-xl

              border
              border-plum/10

              bg-white
              text-plum

              shadow-sm

              transition-all
              duration-300

              hover:border-pink
              hover:bg-blush

              md:hidden

              ${scrolled ? "h-9 w-9" : "h-10 w-10"}
            `}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {isOpen && (
          <div
            className="
              absolute
              left-0
              right-0
              top-full

              border-t
              border-plum/10

              bg-white/95

              shadow-xl

              backdrop-blur-xl

              md:hidden
            "
          >
            {/* =================================================
                MENU CONTENT
            ================================================= */}

            <div
              className="
                flex
                min-h-[190px]
                flex-col
                items-center
                justify-center

                px-6
                py-5
              "
            >
              {/* =================================================
                  TWO NAV ITEMS ONLY
              ================================================= */}

              <nav
                className="
                  flex
                  w-full
                  max-w-sm
                  flex-col
                  items-center
                  justify-center
                  gap-2
                "
              >
                {visibleItems.map((item, visibleIndex) => {
                  const Icon = item.icon;

                  const actualIndex = startIndex + visibleIndex;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="
                          group

                          flex
                          w-full
                          max-w-xs

                          items-center
                          justify-center
                          gap-3

                          rounded-2xl

                          px-4
                          py-3

                          transition-all
                          duration-200

                          hover:bg-blush
                          active:scale-[0.98]
                        "
                    >
                      {/* NUMBER */}

                      <span
                        className="
                            w-6
                            text-right

                            text-[10px]
                            font-bold

                            text-rose/40
                          "
                      >
                        {String(actualIndex + 1).padStart(2, "0")}
                      </span>

                      {/* ICON */}

                      <span
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0

                            items-center
                            justify-center

                            rounded-xl

                            bg-blush
                            text-rose

                            transition-all
                            duration-200

                            group-hover:bg-pink
                            group-hover:text-white
                          "
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </span>

                      {/* TEXT */}

                      <span
                        className="
                            w-28

                            text-left

                            text-sm
                            font-bold

                            text-plum

                            transition-colors

                            group-hover:text-rose
                          "
                      >
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* =================================================
                  UP / DOWN CONTROLS
              ================================================= */}

              <div
                className="
                  mt-3
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                "
              >
                {/* UP */}

                {!isFirstPage && (
                  <button
                    type="button"
                    onClick={previousPage}
                    aria-label="Previous navigation items"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-plum/10

                      bg-blush
                      text-plum

                      transition-all
                      duration-200

                      hover:bg-pink
                      hover:text-white

                      active:scale-95
                    "
                  >
                    <ChevronUp size={18} />
                  </button>
                )}

                {/* PAGE INDICATOR */}

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  {Array.from({
                    length: totalPages,
                  }).map((_, index) => (
                    <span
                      key={index}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          index === menuPage
                            ? "w-5 bg-pink"
                            : "w-1.5 bg-plum/15"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* DOWN */}

                {!isLastPage && (
                  <button
                    type="button"
                    onClick={nextPage}
                    aria-label="Next navigation items"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-plum/10

                      bg-blush
                      text-plum

                      transition-all
                      duration-200

                      hover:bg-pink
                      hover:text-white

                      active:scale-95
                    "
                  >
                    <ChevronDown size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          MOBILE FLOATING SOCIALS
      ===================================================== */}

      {!isOpen && (
        <div
          className="
            fixed
            right-3
            top-1/2
            z-40

            flex
            -translate-y-1/2
            flex-col
            gap-2

            md:hidden
          "
        >
          {/* EMAIL */}

          <a
            href="mailto:linletsandarmyint@gmail.com"
            aria-label="Email me"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl

              border
              border-plum/10

              bg-white/90
              text-plum

              shadow-lg
              backdrop-blur-md

              transition-all
              duration-200

              hover:-translate-x-1
              hover:bg-pink
              hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />

              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/linletsandarmyint"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl

              border
              border-plum/10

              bg-white/90
              text-plum

              shadow-lg
              backdrop-blur-md

              transition-all
              duration-200

              hover:-translate-x-1
              hover:bg-pink
              hover:text-white
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/linletsandarmyint/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl

              border
              border-plum/10

              bg-white/90
              text-plum

              shadow-lg
              backdrop-blur-md

              transition-all
              duration-200

              hover:-translate-x-1
              hover:bg-pink
              hover:text-white
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4.9v15H.5V8Zm7.5 0h4.7v2.05h.07c.65-1.23 2.25-2.52 4.63-2.52 4.95 0 5.86 3.26 5.86 7.5V23h-4.9v-7.08c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.75V23H8V8Z" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
