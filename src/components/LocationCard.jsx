import React, { useEffect, useRef } from "react";
import coffee from "../assets/latte-art.png";
import { motion } from "framer-motion";
function LocationCard() {
  const circleTextRef = useRef(null);

  useEffect(() => {
    const element = circleTextRef.current;
    if (!element) return;

    let angle = 0;
    const animate = () => {
      angle = (angle + 0.15) % 360;
      element.style.setProperty("--rotation", `${angle}deg`);
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const text = "curious & enthusiastic ";
  const characters = text.split("");

  return (
    <motion.div className="py-4   md:w-4/5  overflow-hidden">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center mt-4 pl-3">
        <div className="relative md:p-6 m-2 md:m-1">
          <img className="size-10" src={coffee} alt="coffee icon" />

          <div
            ref={circleTextRef}
            className="circle-text absolute tracking-tighter"
            style={{
              "--rotation": "0deg",
              "--circle-size": "85px",
              top: "50%",
              left: "50%",
              width: "var(--circle-size)",
              height: "var(--circle-size)",
              transform: "translate(-50%, -50%) rotate(var(--rotation))",
            }}
          >
            <style>{`
              .circle-text span {
                position: absolute;
                left: 50%;
                top: 0;
                transform-origin: 0 calc(var(--circle-size) / 2);
                color: white;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 0.55rem;
                transform: translateX(-50%);
                letter-spacing: 0;
              }
            `}</style>

            {characters.map((char, i) => {
              const angle = (i / characters.length) * 360;
              return (
                <span key={i} style={{ transform: `rotate(${angle}deg)` }}>
                  {char}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex items-center w-60 md:w-1/2 ml-6 md:ml-2">
          <div className="border mx-2 h-14"></div>
          <p className=" ml-2 text-[10px] md:text-[13px]  uppercase font-light tracking-wider">
            Thiruvamiyur. Chennai. India <br /> Developing Websites for business
          </p>
        </div>
      </motion.div>
      <motion.span
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1, delay: 0.8 }}
      className="inline-block"
      >
        <hr className="mt-5 md:mt-1" />
      </motion.span>   
       </motion.div>
  );
}

export default LocationCard;