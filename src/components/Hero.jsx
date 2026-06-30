import profile from "../assets/profile.png";
import { useEffect, useState } from "react";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 animate-fade">

        {/* BACKGROUND GLOW */}
        <div
            className="
             absolute
             top-0
             left-1/2
             -translatex-x-1/2

             w-[700px]
             h-[700px]

             bg-blue-500/20
             rounded-full
             blur-[180px]
            "
           />  

        <div
          className="
            absolute
            right-0
            top-40

            w-[400px]
            h-[400px]

            bg-cyan-500/10
            rounded-full
            blur-[150px]
          "
        />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">

        <div className="grid lg:grid-cols-3 items-center gap-10">

          {/* KIRI */}
          <div>

            <p className="text-blue-400 uppercase tracking-[4px]">
              Halo 👋, saya
            </p>

            <h2 className="text-white text-4xl font-semibold mt-3">
              LIS DIANA PUTRI
            </h2>

            <div
              style={{
                transform: `translateY(${offsetY * 0.25}px)`,
              }}
            >
              <h1 className="text-6xl md:text-7xl font-bold leading-none mt-5">
                <span className="text-white">
                  FRONTEND
                </span>
                <br />
                <span className="text-blue-500">
                  DEVELOPER
                </span>
              </h1>
            </div>

            <p className="text-white/80 mt-6 max-w-sm text-lg leading-relaxed">
              Saya membangun website modern,
              responsif dan user-friendly.
            </p>

          </div>

          {/* TENGAH */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-blue-600/30
                  rounded-full
                  blur-[100px]
                "
                style={{
                  transform: `translateY(${offsetY * 0.4}px)`,
                }}
              />

              <div
                style={{
                  transform: `translateY(${offsetY * 0.12}px)`,
                }}
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="
                    relative
                    z-10
                    w-[400px]
                    h-[400px]
                    object-cover
                    rounded-full
                    animate-[float_4s_ease-in-out_infinite]
                    border
                    border-blue-500/20
                  "
                />
              </div>

            </div>

          </div>

          {/* KANAN */}
          <div className="flex flex-col gap-4 lg:items-start items-center">

            <button
              className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-full
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Lihat Project →
            </button>

            <button
              className="
                border
                border-blue-500
                text-white
                px-6
                py-3
                rounded-full

                hover:bg-blue-500
                hover:scale-105

                transition-all
                duration-300
              "
            >
              Download CV
            </button>

          </div>

        </div>

      </div>
    </section>

  );
}

export default Hero;