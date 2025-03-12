import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import FadeInText from "./components/FadeInText";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex items-center justify-center text-white text-2xl z-50"
          >
            <FadeInText desc="Please be patient..."/>
          </motion.div>
        ) : (
          <div className="text-white p-2 lg:mx-2 mt-1 poppins-medium ">
            <CustomCursor />
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
        )}
      </AnimatePresence>
    </>
  );
}

export default App;