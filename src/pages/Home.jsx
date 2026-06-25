import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;