import "./App.css";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";

import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <ShinyButton /> */}
      <div className="text-white p-2 mt-10 poppins-medium ">
        <HeroSection />
        <div className="grid-background flex flex-col justify-center items-center ">
          <div className="container flex flex-col gap-20">
            
          
            <SkillsSection />
            <ProjectsSection />
            
          </div>
        </div>
        <ContactSection />
        <Footer />
        <section className="flex flex-col justify-center items-center">
          <NavBar />
        </section>
      </div>
    </>
  );
}

export default App;

