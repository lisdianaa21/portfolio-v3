import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 w-full">

            <div className="grid lg:grid-cols-3 items-center gap-10">

                {/* KIRI */}
                <div>

                    <p className="text-blue-400 uppercase tracking-[4px]">
                        Halo 👋, saya
                    </p>

                    <h2 className="text-white text-4xl font-semibold mt-3">
                        LIS DIANA PUTRI
                    </h2>

                    <h1 className="text-6xl md:text-7xl font-bold leading-none mt-5">
                        <span className="text-white">
                            FRONTEND
                        </span>
                        <br />
                        <span className="text-blue-500">
                            DEVELOVER
                        </span>
                    </h1>

                    <p className="text-white/80 mt-6 max-w-sm text-lg leading-relaxed">
                        Saya membangun website modern,
                        responsif dan user-friendly.
                    </p>


                </div>

                {/* TENGAH */}
                <div className="lex justify-center">

                    <div className="relative">

                        <div className="
                            absolute
                            inset-0
                            bg-blue-600/30
                            rounded-full
                            blur-[100px]
                        " />

                        <img 
                          src={profile} 
                          alt="Profile"
                          className="
                            relavite
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

                    {/* KANAN */}
                    <div className="flex flex-col gap-4 lg:items-start items-center">

                        <button className="
                            bg-blue-600
                            px-6
                            py-3
                            rounded-full
                        ">
                            Lihat Project →
                        </button>

                        <button className="
                            border
                            border-blue-500
                            text-white
                            px-6
                            py-3
                            rounded-full
                            hover:bg-blue-500
                            transition
                        ">
                            Download CV
                        </button>
                    </div>

                </div>

            </div>
    </section>
  );
}

export default Hero;