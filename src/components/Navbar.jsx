import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
      fixed
      z-50
      transition-all
      duration-500
      ${
        scrolled
          ? "top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4"
          : "top-10 left-0 w-full px-8 py-6"
      }
      `}
    >
      <div
        className={`
        flex
        items-center
        ${
          scrolled
            ? "justify-center gap-8"
            : "max-w-7xl mx-auto justify-between"
        }
        `}
      >
        {!scrolled && (
          <div>
            <h1 className="text-white font-bold text-xl">
              LIS DIANA PUTRI
            </h1>

            <p className="text-blue-400 text-sm">
              Frontend Developer
            </p>
          </div>
        )}

        <ul className="flex gap-8 text-white">
          <li>
            <a href="#about">Tentang</a>
          </li>

          <li>
            <a href="#projects">Project</a>
          </li>

          <li>
            <a href="#contact">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;