import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="
        fixed
        pointer-events-none
        z-0
        w-72
        h-72
        rounded-full
        blur-3xl
        bg-blue-500/20
        transition-all
        duration-300
      "
      style={{
        left: position.x - 140,
        top: position.y - 140,
      }}
    />
  );
}

export default CursorGlow;