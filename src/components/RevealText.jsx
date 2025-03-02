import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./RevealText.css";
const DURATION = 0.25;
const STAGGER = 0.025;


const FlipLetter = ({ children, href }) => {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  },2000);
  return (
    <motion.a
      initial="initial"
      animate={loaded ? "initial" : "hovered"}
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase  hero-text"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-110%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "110%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export const RevealText = ({text}) => {
  return (
    
      <FlipLetter>{text}</FlipLetter>
  
  );
};


