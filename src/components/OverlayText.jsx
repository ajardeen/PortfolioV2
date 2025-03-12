import React from "react";
import { motion } from "framer-motion";

function OverlayText({ text}) {
  return (
    <div className="uppercase text-3xl lg:text-6xl relative text-center pb-10 z-10">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" ,delay:0.5}}
      >
        {text}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-t-3xl"></div>
    </div>
  );
}

export default OverlayText;