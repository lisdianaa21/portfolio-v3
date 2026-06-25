import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section
      id="projects"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-white">
          Featured Projects
        </h2>

        <p className="text-slate-400 mt-4 mb-12">
          Beberapa project terbaik yang pernah saya kerjakan.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* PROJECT UTAMA */}
          <div className="md:col-span-2 group">

            <div
              onClick={() => selectedProject(projects[0])}
              className="
                cursor-pointer
                bg-white/5
                border border-white/10
                rounded-3xl
                overflow-hidden

                hover:border-blue-500/50
                hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]

                transition-all
                duration-500
              "
            >

              <div className="relative overflow-hidden">

                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="
                    w-full
                    h-80
                    object-cover

                    group-hover:scale-105

                    transition-all
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#0B1120]/90
                    via-[#0B1120]/30
                    to-transparent

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-500
                  "
                />

                {/* VIEW PROJECT */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6

                    opacity-0
                    translate-y-4

                    group-hover:opacity-100
                    group-hover:translate-y-0

                    transition-all
                    duration-500
                  "
                >
                  <span
                    className="
                      bg-blue-500/20
                      text-blue-300
                      px-4
                      py-2
                      rounded-full
                      backdrop-blur-md
                      text-sm
                    "
                  >
                    View Project →
                  </span>
                </div>

              </div>

              <div className="p-8">

                <span
                  className={`
                    inline-block
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    mb-4

                    ${
                      projects[0].status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  `}
                >
                  {projects[0].status}
                </span>

                <h3 className="text-3xl font-bold text-white">
                  {projects[0].title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {projects[0].tech}
                </p>

              </div>

            </div>

          </div>

          {/* PROJECT LAINNYA */}
          {projects.slice(1).map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="
                group
                cursor-pointer
                bg-white/5
                border border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-blue-500/50
                hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
                transition-all
                duration-500
              "
            >

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-60
                    object-cover
                    group-hover:scale-105
                    transition-all
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#0B1120]/90
                    via-[#0B1120]/30
                    to-transparent

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-500
                  "
                />

                {/* BUTTON */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center

                    bg-black/50
                    backdrop-blur-sm

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-500
                  "
                >
                  <button
                    className="
                      px-6
                      px-3
                      rounded-xl
                      bg-blue-600
                      text-white
                      font-semibold
                    "
                  >
                    View Project →
                  </button>
                </div>

              </div>

              <div className="p-6">

                <span
                  className={`
                    inline-block
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    mb-4

                    ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  `}
                >
                  {project.status}
                </span>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {project.tech}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    {selectedProject && (
  <div
    className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
    "
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="
        relative
        bg-[#111827]
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        max-w-3xl
        w-full
        mx-4
      "
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedProject(null)}
        className="
          absolute
          top-4
          right-4
          w-10
          h-10
          rounded-full
          bg-black/40
          text-white
          hover:bg-black/60
          transition
          z-10
        "
        >
          X
      </button>

      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-8">

        <button
          onClick={() => setSelectedProject(null)}
          className="
            mb-6 
            flex
            items-center
            gap-2
            text-blue-400
            hover:text-blue-300
            font-medium
            "  
          >
            ← Kembali
        </button>

        <h3 className="text-3xl font-bold text-white">
          {selectedProject.title}
        </h3>

        <p className="text-slate-400 mt-3">
          {selectedProject.description}
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href={selectedProject.github}
            target="_blank"
            rel="noonpener noreferre"
            className="
              px-5
              py-3
              rounded-xl
              bg-white/10
              text-white
            "
          >
            GitHub
          </a>

          <a
            href={selectedProject.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSelectedProject(null)}
            className="
              px-5
              py-3
              rounded-xl
              bg-blue-600
              text-white
            "
          >
            Live Demo
          </a>

        </div>

      </div>
    </div>
  </div>
)}
    </section>
  );
}

export default Projects;