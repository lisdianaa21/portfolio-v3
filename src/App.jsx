import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Stats from "./components/Stats";

import About from "./sections/About"
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <Stats />
      <Certificates />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />

    </>
  );
}

export default App;