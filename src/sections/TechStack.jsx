function TechStack() {
  const skills = [
  { icon: "🌐", name: "HTML" },
  { icon: "🎨", name: "CSS" },
  { icon: "⚡", name: "JavaScript" },
  { icon: "⚛️", name: "React" },
  { icon: "💨", name: "Tailwind CSS" },
  { icon: "🔥", name: "Firebase" },
  { icon: "🌿", name: "Git" },
  { icon: "🐙", name: "GitHub" },
  { icon: "🚀", name: "Vite" },
];

  return (
    <section
      id="skills"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-white">
          Tech Stack
        </h2>

        <p className="text-slate-400 mt-4">
          Teknologi yang saya gunakan untuk membangun website modern.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-6
                text-center
                hover:border-blue-500/50
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                transition-all
                duration-300
              "
            >

              <div className="text-3xl mb-3">
                {skill.icon}
              </div>

              <h3 className="text-white font-medium">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TechStack;