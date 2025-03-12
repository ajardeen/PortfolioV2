import React, { useState, useEffect } from "react";
import { RevealText } from "../components/RevealText";
import ProjectExpandableCard from "../components/ProjectExpandableCard";
import FadeInText from "../components/FadeInText";
import { projects } from "../datas/ProjectData";
import { motion, useAnimation } from "framer-motion";
import arrow from "../assets/Arrow.webm";
import ShinnyLine from "../components/ShinnyLine";

function ProjectsSection() {
  const [reveal, setReveal] = useState(false);
  const controls = useAnimation();

  function handleReveal() {
    setTimeout(() => {
      setReveal(true);
    }, 1000);
    setTimeout(() => {
      setReveal(false);
    }, 10000);
  }

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="relative flex flex-col gap-4 p-4 overflow-hidden" id="work">
      {/* skill div  */}
      <div className="flex gap-10 justify-center items-center">
          <span className="rotate-180">
            <ShinnyLine />
          </span>
          <span>
            <RevealText text={"Projects"} />
          </span>
          {/* shinny line animation  */}
          <ShinnyLine />
        </div>
    
 <div className="flex flex-wrap gap-x-10 gap-y-2 justify-center">

      {/* Dynamically Render Projects */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
          }}
          onViewportEnter={handleReveal}
          className=" flex justify-around items-center gap-4 my-3"
        >
          {reveal && index === 0 && ( // Show arrow only for the first project
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-20 left-[10rem] hidden lg:flex flex-col items-center justify-center z-10"
            >
              <h2 className="font-extrabold">tap to expand</h2>
              <video src={arrow} autoPlay muted className="rotate-45 size-28" />
            </motion.span>
          )}

          {/* Project Card */}
          <ProjectExpandableCard
            title={project.title}
            desc={project.desc}
            techStacks={project.techStacks}
            images={project.images}
            data={project.data}
            frontEndCodeUrl={project.frontEndCodeUrl}
            backEndCodeUrl={project.backEndCodeUrl}
            demoUrl={project.demoUrl}
            video={project.video.length > 0 ? project.video : null}
          />

          {/* Description and Tech Stack
          <FadeInText
            desc={project.desc}
            techStacks={project.techStacks}
            codeUrl={project.codeUrl}
            demoUrl={project.demoUrl}
          /> */}
        </motion.div>
      ))} </div>
    </section>
  );
}

export default ProjectsSection;