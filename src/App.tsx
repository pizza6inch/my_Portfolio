import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tech from "./components/Tech";
import StarsCanvas from "./components/canvas/StarsCanvas";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-main relative ">
        <div className="bg-cyan-950 lg:bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
