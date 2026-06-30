import { useEffect, useMemo, useState } from "react";
import {
  FaAward,
  FaUser,
  FaLaptopCode,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("certificates");

  const navLinks = useMemo(
    () => [
      {
        id: "certificates",
        label: "Certificates",
        icon: <FaAward />,
      },
      {
        id: "about",
        label: "About",
        icon: <FaUser />,
      },
      {
        id: "projects",
        label: "Projects",
        icon: <FaLaptopCode />,
      },
      {
        id: "skills",
        label: "Skills",
        icon: <FaCode />,
      },
      {
        id: "contact",
        label: "Contact",
        icon: <FaEnvelope />,
      },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      const sections = document.querySelectorAll("section[id]");

      let current = active;

      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <nav
      className={`
        fixed
        left-1/2
        -translate-x-1/2
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "top-3 opacity-100 scale-100"
            : "-top-20 opacity-0 scale-95 pointer-events-none"
        }
      `}
    >
      <div
        className="
          flex
          items-center
          gap-1

          rounded-full

          border
          border-white/10

          bg-white/10
          backdrop-blur-2xl

          p-2

          shadow-[0_8px_35px_rgba(0,0,0,.35)]
        "
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`
              flex
              items-center
              justify-center

              rounded-full

              transition-all
              duration-300

              ${
                active === link.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }

              h-10
              w-10

              sm:h-11
              sm:w-11

              lg:h-11
              lg:w-auto
              lg:px-5
            `}
          >
            {/* Mobile */}
            <span className="text-lg lg:hidden">{link.icon}</span>

            {/* Desktop */}
            <span className="hidden items-center gap-2 lg:flex">
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
