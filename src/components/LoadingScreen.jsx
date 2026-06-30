import { useEffect, useState } from "react";

function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[#0B1120]

        transition-all
        duration-700

        ${
          hide
            ? "opacity-0 invisible"
            : "opacity-100 visible"
        }
      `}
    >
      <div className="text-center">

        <h1
          className="
            text-white
            text-5xl
            font-bold
            tracking-[6px]
          "
        >
          WELCOME TO MY PORTFOLIO 
        </h1>

        <p className="text-blue-400 mt-4 tracking-[3px] uppercase">
          Frontend Developer
        </p>

        <div className="flex justify-center mt-12">

          <div
            className="
              w-12
              h-12

              rounded-full

              border-4
              border-blue-500/20
              border-t-blue-500

              animate-spin
            "
          />

        </div>

      </div>
    </div>
  );
}

export default LoadingScreen;