import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <div className="bg-slate-900 relative ">
      <div className="bg-hero-pattern">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
