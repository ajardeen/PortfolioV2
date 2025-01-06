import React, { useState, useEffect } from "react";
import { RevealText } from "../components/RevealText";
import ShinyButton from "../components/ShinyButton";
import "./HeroSection.css";
import { motion } from "framer-motion";
import arrow from "../assets/Arrow.webm";

function HeroSection() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 1000);
    setTimeout(() => {
      setReveal(false);
    }, 30000);
  }, []);

  return (
    <section className=" relative px-4 md:px-20 pt-1 hero-section" id="heroSection">
      <RevealText text={"MOHAMED"} />
      <RevealText text={"AJARDEEN"} />
      {reveal && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="  hidden lg:flex absolute -top-10 left-[26rem]  items-center justify-center"
        >
          <video src={arrow} autoPlay muted className=" rotate-180  size-28 " />
          <h2 className="font-extrabold ">its me</h2>
        </motion.span>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        drag={true}
        whileDrag={{ scale: 0.9, opacity: 0.5 }}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="relative flex flex-col justify-center items-center py-10"
      >
       

        <motion.div className=" w-full md:w-[50rem] flex flex-col justify-center items-center my-5">
      
          <div className="flex flex-wrap gap-3 justify-center">
            <RevealText text={"MERN"} />
            <RevealText text={"STACK"} />
            <RevealText text={"DEVELOPER"} />
          </div>
          <p className="text-start text-gray-400 mt-5 w-full md:w-10/12 self-start ml-2 md:ml-7">
            I Build seamless full-stack web
            applications using{" "}
            <span className="font-semibold text-gray-100">React.js</span>,{" "}
            <span className="font-semibold text-gray-100">Node.js</span>,{" "}
            <span className="font-semibold text-gray-100">Express.js</span>, and{" "}
            <span className="font-semibold text-gray-100">MongoDB</span>. My
            portfolio showcases diverse projects that combine clean code,
            intuitive design, and modern development principles.
          </p>
          <div className="self-start flex justify-center items-center p-6">
          <motion.span
          initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl pb-1 md:text-7xl ">
        
          {"<"}
        </motion.span>
           <motion.span 
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 ,delay: 0.6,type: "spring" }}
           > <ShinyButton /></motion.span>
            <motion.span
          initial={{ opacity: 0,x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 ,delay: 0.5,type: "spring" }}
          className="text-4xl md:text-5xl "
        >
          {"/>"}
        </motion.span>
          </div>
          
        </motion.div>
       
      </motion.div>
    </section>
  );
}

export default HeroSection;
