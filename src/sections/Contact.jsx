function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-white">
          Hubungi Saya
        </h2>

        <p className="text-slate-400 mt-4">
          Mari berdiskusi dan berkolaborasi dalam project menarik.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <a
            href="mailto:lisdianaa.putrii@gmail.com"
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-md
            hover:border-blue-500/50
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <div className="text-4xl">📧</div>

            <h3 className="text-white text-xl mt-4">
              Email
            </h3>

            <p className="text-slate-400 mt-2">
              lisdianaa.putrii@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/lisdianaa21"
            target="_blank"
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-md
            hover:border-blue-500/50
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <div className="text-4xl">🐙</div>

            <h3 className="text-white text-xl mt-4">
              GitHub
            </h3>

            <p className="text-slate-400 mt-2">
              Lihat Repository
            </p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-md
            hover:border-blue-500/50
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <div className="text-4xl">💼</div>

            <h3 className="text-white text-xl mt-4">
              LinkedIn
            </h3>

            <p className="text-slate-400 mt-2">
              Connect With Me
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;