import { motion } from "framer-motion";
import "./ShinyButton.css";
import { useState } from "react";

const ShinyButton = () => {
  const [text, setText] = useState("Resume");
  const [click, setClick] = useState(false);
  return (
    <motion.button
  
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileHover={{scale:1.1 }}
      whileTap={{ scale: 0.87 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      onClick={() => {
        setText("Thank You!");
        setClick(true);
        setTimeout(() => {
          setClick(false);
          setText("Hire Me");
        }, 5000);
      }}
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <motion.span 
     layout
      className={!click ? "text-neutral-100 text-lg tracking-wide font-light h-full w-full block relative linear-mask" : "text-green-500 text-lg tracking-wide font-light h-full w-full block relative linear-mask"}>
        {text}
      </motion.span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;