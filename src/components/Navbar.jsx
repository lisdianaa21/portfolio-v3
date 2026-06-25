import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  const navLinks = [
    { id: "certificates", label: "Certificates"},
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const top = section.offsetTop - 200;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeIndex = navLinks.findIndex(
    (item) => item.id === active
  );

  return (
    <nav
      className={`
        fixed
        z-50
        transition-all
        duration-700
        ease-out

        ${
          scrolled
            ? `
              opacity-100
              top-4
              left-1/2
              -translate-x-1/2

              bg-white/10
              backdrop-blur-xl

              border
              border-white/10

              rounded-full

              px-4
              py-3

              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            `
            : `
              opacity-0
              pointer-events-none

              top-0
              left-1/2
              -translate-x-1/2 
            `
        }
      `}
    >
      <div
        className={`
          flex
          items-center

          ${
            scrolled
              ? "justify-center"
              : "max-w-7xl mx-auto justify-between"
          }
        `}
      >
        <div className="relative">
          {/* SLIDING BADGE */}
          <div
            className="
              absolute
              top-1
              left-1
              h-[44px]
              w-[120px]

              rounded-full
              bg-blue-600

              shadow-[0_0_25px_rgba(59,130,246,0.6)]

              transition-all
              duration-500
              ease-out
            "
            style={{
              transform: `translateX(${activeIndex * 122}px)`,
            }}
          />

          <ul className="relative flex items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`
                    relative
                    z-10

                    flex
                    items-center
                    justify-center

                    w-[120px]
                    h-[46px]

                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    ${
                      active === link.id
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;