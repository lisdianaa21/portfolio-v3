function ProjectCard({
  title,
  tech,
  image,
  status,
  github,
  demo,
}) {
  return (
    <div
      className="
        group
        bg-white/5
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        backdrop-blur-md
        hover:border-blue-500/50
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition
            duration-700
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-900/60
            to-transparent
          "
        />
      </div>

      <div className="p-5 min-h-[180px]">
        <div className="mb-4">
          <span
            className={`
              px-3 py-1 rounded-full text-xs font-medium
              ${
                status === "Completed"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }
            `}
          >
            {status}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="text-slate-400 mt-2">
          {tech}
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2
              rounded-xl
              bg-blue-500/20
              text-blue-400
              font-medium
              hover:bg-blue-500/30
              transition
            "
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2
              rounded-xl
              bg-white/10
              text-white
              font-medium
              hover:bg-white/20
              transition
            "
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;