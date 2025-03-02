import React from "react";
import { motion } from "framer-motion";

function ProjectOverlayText({ text}) {
  return (
    <div className="uppercase w-full  lg:text-2xl  text-white relative text-center pb-2 z-10">
      <motion.div
      className="shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" ,delay:0.5}}
      >
        {text}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-t-xl -z-10"></div>
    </div>
  );
}

export default ProjectOverlayText;