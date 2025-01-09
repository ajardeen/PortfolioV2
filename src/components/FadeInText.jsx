import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { FaCode } from "react-icons/fa";
function FadeInText({ desc, techStacks, demoUrl, codeUrl }) {
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);
  const [isDemoHovered, setIsDemoHovered] = useState(false);

  const characters = desc.split("");
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <motion.div
      className="lg:w-[50%] flex flex-col gap-3"
      layout="position"
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      <h1 className="text-2xl font-bold">Project Description</h1>
      <motion.p
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.01 }}
        className="text-xs md:text-sm lg:text-base leading-5 opacity-80"
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.1 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <motion.div className="font-bold">Tech Stack</motion.div>
      <motion.div
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.01 }}
        className="flex gap-2 flex-wrap"
      >
        {techStacks.map((tech, index) => (
          <motion.span
            key={index}
            transition={{ duration: 1, delay: index * 0.2 }}
            variants={charVariants}
            className="text-slate-300 opacity-70 border rounded-full px-3 py-1 hover:text-white hover:opacity-100 text-xs lg:text-base"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className="font-bold">Links</motion.div>

      <motion.div className="flex gap-10 justify-start">
        <motion.a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseOver={() => setIsDemoHovered(true)}
            onMouseLeave={() => setIsDemoHovered(false)}
            className="flex justify-center items-center gap-1"
          >
            <FaCode className="text-2xl lg:text-5xl hover:text-slate-300 cursor-pointer" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8,delay:0.5 }}
              className={`bg-black  text-sm lg:text-lg text-white p-2 rounded-md cursor-pointer `}
            >
              Demo
            </motion.div>
          </motion.span>
        </motion.a>

        <motion.a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <span
            onMouseOver={() => setIsGitHubHovered(true)}
            onMouseLeave={() => setIsGitHubHovered(false)}
            className="flex justify-center items-center gap-1"
          >
            <IoLogoGithub className="text-2xl lg:text-5xl text-slate-300 cursor-pointer" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8,delay:0.5 }}
              className={`bg-black text-sm lg:text-lg text-white p-2 rounded-md cursor-pointer `}
            >
              GitHub
            </motion.div>
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default FadeInText;
