function Stats() {
  const stats = [
    {
      number: "4+",
      label: "Projects",
    },
    {
      number: "9+",
      label: "Technologies",
    },
    {
      number: "3+",
      label: "Certificates",
    },
    {
      number: "∞",
      label: "Learning Journey",
    },
  ];

  return (
    <section className="px-8 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                backdrop-blur-md

                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]

                transition-all
                duration-300
              "
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  text-blue-400
                "
              >
                {item.number}
              </h3>

              <p
                className="
                  text-slate-400
                  mt-3
                "
              >
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;