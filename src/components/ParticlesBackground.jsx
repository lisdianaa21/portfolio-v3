
function ParticlesBackground() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 40,
          },
          color: {
            value: "#3b82f6",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            color: "#3b82f6",
            opacity: 0.2,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;