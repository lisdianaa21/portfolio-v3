function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      mt-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-8

        flex
        flex-col
        md:flex-row

        justify-between
        items-center
        gap-4
        "
      >
        <p className="text-scale-400 text-sm">
            Designed & Developed by Lis Diana Putri
        </p>

        <p className="text-slate-400 text-sm">
          © 2026 All Rights Reserved
        </p>

        <p className="text-slate-500 text-sm">
          Built with React + Tailwind CSS
        </p>
      </div>

      <div className="flex gap-4">
        <a href="#">🐙</a>
        <a href="#">💼</a>
        <a href="#">📧</a>
    </div>
    </footer>
  );
}

export default Footer;