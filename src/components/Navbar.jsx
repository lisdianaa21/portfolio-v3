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
        top-3
        z-50
        flex
        justify-center
        px-3

        transition-all
        duration-500
        ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }
      `}
    >
      <div
        className="
          flex
          w-full
          max-w-md
          lg:max-w-fit

          items-center
          rounded-full

          border
          border-full

          bg-black/30
          backdrop-blur-xl

          p-2
          shadow-xl
        "
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`
              flex-1
              lg:fflex-none
              flex
              items-center
              justify-center

              rounded-full
              py-2
              px-3

              lg:px-5
              transition-all
              duration-300

            ${
              active === link.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }
          `}
          >
            {/* Mobile */}
            <>
              <span className="text-lg lg:hidden">{link.icon}</span>

              <span className="hidden lg:flex items-center gap-2">
                {link.icon}
                {link.label}
              </span>
            </>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
