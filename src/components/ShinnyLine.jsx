import React from "react";
import { motion } from "framer-motion";
function ShinnyLine() {
  return (
    <>
      <motion.div className="relative flex flex-col rotate-90 justify-center items-center overflow-hidden h-10 w-fit">
        <div className="border h-20 opacity-30 "></div>
        <motion.div
          className="border h-4 absolute  "
          initial={{ y: -120 }}
          animate={{ y: 120 }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default ShinnyLine;