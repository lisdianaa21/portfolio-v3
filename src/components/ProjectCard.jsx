function ProjectCard({ title, tech, image, status }) {
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
      <div className="aspect-[16/9] overflow-hidden">

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
            to-transparent
          "
        />

      </div>

      <div className="p-5 mh-h-[140px]">

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

        <h3 className="
          text-2xl
          font-bold
          text-white
        ">
          {title}
        </h3>

        <p className="
          text-slate-400
          mt-2
        ">
          {tech}
        </p>

        <button
          className="
          mt-6
          text-blue-400
          font-medium
          "
        >
          Lihat Project →
        </button>

      </div>
    </div>
  );
}

export default ProjectCard;