import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Training from "./components/Training/Training";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-surface text-text dark:bg-[#050414] dark:text-white transition-colors duration-300">

       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <AboutMe />
        <Skills />
        <Work />
        <Education />
        <Certifications />
        <Training />
        <Achievements />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
