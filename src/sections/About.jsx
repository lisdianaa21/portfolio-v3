function About() {
  return (
    <section
      id="about"
      className="py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-white">
          Tentang Saya
        </h2>

        <p className="text-slate-400 mt-4">
          Kenalan lebih dekat dengan saya.
        </p>

        <div
          className="
          mt-12
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-10
          backdrop-blur-md
          "
        >

          <p
            className="
            text-slate-300
            text-lg
            leading-relaxed
            "
          >
            Halo, saya <span className="text-white font-semibold">Lis Diana Putri</span>.
            Saya seorang Frontend Developer yang fokus membangun website
            modern, responsif, dan user-friendly menggunakan React,
            Tailwind CSS, dan Firebase.
          </p>

          <p
            className="
            text-slate-400
            mt-6
            leading-relaxed
            "
          >
            Saya senang mengubah desain menjadi website yang menarik,
            cepat, dan nyaman digunakan oleh pengguna.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

  <div className="bg-white/5 p-6 rounded-2xl">
    <h3 className="text-4xl font-bold text-blue-400">
      4+
    </h3>
    <p className="text-slate-400">
      Project
    </p>
  </div>

  <div className="bg-white/5 p-6 rounded-2xl">
    <h3 className="text-4xl font-bold text-blue-400">
      9+
    </h3>
    <p className="text-slate-400">
      Technologies
    </p>
  </div>

  <div className="bg-white/5 p-6 rounded-2xl">
    <h3 className="text-4xl font-bold text-blue-400">
      100%
    </h3>
    <p className="text-slate-400">
      Learning Spirit
    </p>
  </div>

</div>

      </div>
    </section>
  );
}

export default About;