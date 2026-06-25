import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Certificates from "./components/Certificates";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;