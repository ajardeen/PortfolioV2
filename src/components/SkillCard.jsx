import React from "react";

import { motion } from "framer-motion";
function SkillCard({ skill, delay,icon }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
      className="flex flex-col justify-center items-center w-16 lg:w-32 py-2 px-5 rounded-lg backdrop-blur-lg border border-gray-600 text-gray-400 hover:text-white"
    >
      <span >{icon}</span> <span className="text-[8px] md:text-base">{skill}</span>
    </motion.span>
  );
}

export default SkillCard;
