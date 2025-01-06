import React, { useState, useEffect } from "react";
import { RevealText } from "../components/RevealText";
import ProjectExpandableCard from "../components/ProjectExpandableCard";
import FadeInText from "../components/FadeInText";
import { projects } from "../datas/ProjectData";
import { motion, useAnimation } from "framer-motion";
import arrow from "../assets/Arrow.webm";
import ShinnyLine from "../components/ShinnyLine";
function ProjectsSection() {
  const [stateProjects, setStateProjects] = useState(projects);
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
    <section className="relative flex flex-col gap-4 p-4" id="work">
      <div className="flex justify-center items-center">
        <RevealText text={"work"} />
      </div>
      {/* shinny line animation  */}
      <ShinnyLine />
      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
        }}
        onViewportEnter={handleReveal}
        className="flex-col flex lg:flex-row justify-around items-center gap-4 my-10"
      >
        {reveal && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-20 left-[10rem] hidden lg:flex flex-col items-center justify-center"
          >
            <h2 className="font-extrabold">tap to expand me</h2>
            <video src={arrow} autoPlay muted className="rotate-90 size-28" />
          </motion.span>
        )}

        <ProjectExpandableCard
          title={stateProjects[0].title}
          desc={stateProjects[0].desc}
          techStacks={stateProjects[0].techStacks}
          images={stateProjects[0].images}
          data={stateProjects[0].data}
          codeUrl={stateProjects[0].codeUrl}
          demoUrl={stateProjects[0].demoUrl}
        />
        <FadeInText
          desc={stateProjects[0].desc}
          techStacks={stateProjects[0].techStacks}
          codeUrl={stateProjects[0].codeUrl}
          demoUrl={stateProjects[0].demoUrl}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
        }}
        onViewportEnter={handleReveal}
        className="flex-col flex lg:flex-row justify-around items-center gap-4 my-10"
      >
        <ProjectExpandableCard
          title={stateProjects[1].title}
          desc={stateProjects[1].desc}
          techStacks={stateProjects[1].techStacks}
          images={stateProjects[1].images}
          data={stateProjects[1].data}
          codeUrl={stateProjects[1].codeUrl}
          demoUrl={stateProjects[1].demoUrl}
        />
        <FadeInText
          desc={stateProjects[1].desc}
          techStacks={stateProjects[1].techStacks}
          codeUrl={stateProjects[1].codeUrl}
          demoUrl={stateProjects[1].demoUrl}
        />
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
