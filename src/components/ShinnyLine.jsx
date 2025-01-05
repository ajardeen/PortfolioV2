import React from "react";
import { motion } from "framer-motion";
function ShinnyLine() {
  return (
    <>
      <motion.div className="relative flex flex-col justify-center items-center overflow-hidden h-20">
        <div className="border w-20 rotate-90 opacity-30"></div>
        <motion.div
          className="border w-4 rotate-90 absolute -bottom-3"
          initial={{ y: -120, rotate: 90 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default ShinnyLine;
