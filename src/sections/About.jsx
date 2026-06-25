function About() {
  return (
    <section
      id="about"
      className="py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* KIRI */}
          <div>

            <span
              className="
                text-blue-400
                uppercase
                tracking-[4px]
              "
            >
              About Me
            </span>

            <h2
              className="
                text-5xl
                font-bold
                text-white
                mt-4
              "
            >
              Frontend Developer
            </h2>

            <p
              className="
                text-slate-400
                mt-6
                leading-relaxed
              "
            >
              Saya adalah mahasiswa yang memiliki
              minat besar dalam Frontend Development
              dan UI Design.
            </p>

            <p
              className="
                text-slate-400
                mt-4
                leading-relaxed
              "
            >
              Saya senang membangun website modern,
              responsif, dan user-friendly menggunakan
              React, Tailwind CSS, serta berbagai
              teknologi web modern lainnya.
            </p>

            <p
              className="
                text-slate-400
                mt-4
                leading-relaxed
              "
            >
              Saat ini saya terus mengembangkan
              kemampuan melalui berbagai project
              pribadi untuk memperdalam pengalaman
              dalam membangun aplikasi web modern.
            </p>

          </div>

          {/* KANAN */}
          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              backdrop-blur-md

              hover:border-blue-500/40
              hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]

              transition-all
              duration-500
            "
          >

            <div className="space-y-6">

              <div>
                <h3 className="text-white font-semibold">
                  Nama
                </h3>

                <p className="text-slate-400">
                  Lis Diana Putri
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Fokus
                </h3>

                <p className="text-slate-400">
                  Frontend Development
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Tech Favorite
                </h3>

                <p className="text-slate-400">
                  React • Tailwind CSS • Firebase
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Status
                </h3>

                <p className="text-green-400">
                  Open To Learn 🚀
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;