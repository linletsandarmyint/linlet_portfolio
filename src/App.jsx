import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Footer/Hero/Hero";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhatIDo />
        <TechStack />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
