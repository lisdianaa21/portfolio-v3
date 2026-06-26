import { useEffect, useMemo, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("certificates");

  const navLinks = useMemo(
    () => [
      {
        id: "certificates",
        label: "Certificates",
        mobile: "Cert",
      },
      {
        id: "about",
        label: "About",
        mobile: "About",
      },
      {
        id: "projects",
        label: "Projects",
        mobile: "Proj",
      },
      {
        id: "skills",
        label: "Skills",
        mobile: "Skill",
      },
      {
        id: "contact",
        label: "Contact",
        mobile: "Cont",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      const sections = document.querySelectorAll("section[id]");

      let current = active;

      sections.forEach((section) => {
        const top = section.offsetTop - 180;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const activeIndex = navLinks.findIndex(
    (item) => item.id === active
  );

  const badgePosition = [
    "translate-x-0",
    "translate-x-[60px] sm:translate-x-[72px] md:translate-x-[86px] lg:translate-x-[104px] xl:translate-x-[122px]",
    "translate-x-[120px] sm:translate-x-[144px] md:translate-x-[172px] lg:translate-x-[208px] xl:translate-x-[244px]",
    "translate-x-[180px] sm:translate-x-[216px] md:translate-x-[258px] lg:translate-x-[312px] xl:translate-x-[366px]",
    "translate-x-[240px] sm:translate-x-[288px] md:translate-x-[344px] lg:translate-x-[416px] xl:translate-x-[488px]",
  ];
    return (
    <nav
      className={`
        fixed
        left-1/2
        -translate-x-1/2
        z-50

        transition-all
        duration-700
        ease-out

        ${
          scrolled
            ? `
              top-4
              opacity-100
              scale-100
              pointer-events-auto
            `
            : `
              -top-20
              opacity-0
              scale-95
              pointer-events-none
            `
        }
      `}
    >
      <div
        className="
          relative

          bg-white/10
          backdrop-blur-2xl

          border
          border-white/10

          rounded-full

          shadow-[0_10px_40px_rgba(0,0,0,.25)]

          px-2
          sm:px-3
          md:px-4

          py-2
        "
      >
        {/* ACTIVE BADGE */}
        <div
          className={`
            absolute
            top-2
            left-2

            h-10

            w-[56px]
            sm:w-[68px]
            md:w-[82px]
            lg:w-[100px]
            xl:w-[118px]

            rounded-full

            bg-gradient-to-r
            from-blue-500
            to-cyan-400

            shadow-[0_0_25px_rgba(59,130,246,.55)]

            transition-all
            duration-500
            ease-out

            ${badgePosition[activeIndex]}
          `}
        />

        <ul
          className="
            relative
            flex
            items-center
            gap-0
          "
        >
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

                  h-10

                  w-[56px]
                  sm:w-[68px]
                  md:w-[82px]
                  lg:w-[100px]
                  xl:w-[118px]

                  rounded-full

                  text-[10px]
                  sm:text-[11px]
                  md:text-xs
                  lg:text-sm

                  font-medium

                  transition-all
                  duration-300

                  hover:scale-105
                  active:scale-95

                  ${
                    active === link.id
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                <span className="hidden lg:block">
                  {link.label}
                </span>

                <span className="block lg:hidden">
                  {link.mobile}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;