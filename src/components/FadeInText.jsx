import React from "react";
import { motion } from "framer-motion";

function FadeInText({ desc }) {
  const characters = desc.split("");
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <motion.div
      className="lg:w-[50%] flex flex-col gap-3"
      layout="position"
      transition={{ duration: 1, type: "spring", stiffness: 300 }}
    >
  
      <motion.p
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.03 }}
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
    </motion.div>
  );
}

export default FadeInText;