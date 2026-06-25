function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        mt-32
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          py-12
        "
      >
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
          "
        >
          {/* KIRI */}
          <div>
            <h3 className="text-white font-bold text-xl">
              LIS DIANA PUTRI
            </h3>

            <p className="text-slate-400 mt-2">
              Frontend Developer
            </p>
          </div>

          {/* TENGAH */}
          <div className="flex gap-6">
            <a
              href="https://github.com/USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-slate-400
                hover:text-white
                transition
              "
            >
              GitHub
            </a>

            <a
              href="#"
              className="
                text-slate-400
                hover:text-white
                transition
              "
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="
                text-slate-400
                hover:text-white
                transition
              "
            >
              Instagram
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10
            mt-8
            pt-8
            text-center
          "
        >
          <p className="text-slate-500 text-sm">
            © 2026 Lis Diana Putri. Built with React & Tailwind CSS 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;