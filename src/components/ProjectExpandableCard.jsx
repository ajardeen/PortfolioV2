import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectExpandableCard({
  title,
  desc,
  techStacks,
  images,
  data,
  codeUrl,
  demoUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hide, setHide] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setTimeout(() => setHide(true), 500);
    setHide(false);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 cursor-pointer bg-black border border-black hover:border-slate-300 overflow-y-scroll rounded-lg no-scrollbar 
          ${
            isOpen
              ? "fixed z-50 h-[90vh] top-4 left-4 right-4 md:top-20 md:left-[20vw] md:right-[20vw] lg:left-[25vw] lg:right-[25vw]"
              : "w-[100vw] md:w-[45vw] lg:w-[30vw]"
          }`}
        layout
      >
        <div
          className={
            !isOpen
              ? "relative overflow-hidden"
              : "relative h-[23vh] lg:h-[51vh] overflow-hidden"
          }
        >
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`project image ${currentImageIndex}`}
            className={`w-full object-cover rounded-lg ${
              isOpen ? "h-[23vh] lg:h-[51vh]" : "h-[30vh]"
            }`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            layout
          />

          {/* Top-right icons */}
          {isOpen ? (
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-2 right-2 flex space-x-2 z-20">
              <a
                href={codeUrl}
                target="_blank"
                className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={demoUrl}
                target="_blank"
                className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            </motion.div>
          ) : null}

          {/* Navigation Controls */}
          <motion.div
            className={`absolute inset-0 flex items-center justify-between ${
              isOpen ? "h-[23vh] lg:h-[51vh]" : "h-[30vh]"
            }`}
          >
            {hide && (
              <>
                <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={prevImage}
                  className="bg-gradient-to-r from-black/40 to-transparent hover:bg-gradient-to-r hover:from-black/70    hover:bg-opacity-70 flex items-center justify-center w-14 h-full"
                >
                  <AiOutlineLeft size={25} />
                </motion.button>
                <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                  onClick={nextImage}
                  className="bg-gradient-to-l from-black/40  to-transparent hover:bg-gradient-to-l hover:from-black/70  flex items-center justify-center w-14 h-full"
                >
                  <AiOutlineRight size={25}  />
                </motion.button>
              </>
            )}
          </motion.div>

          {/* Title */}
          <motion.span
            className={
              !isOpen
                ? "absolute bottom-0 left-0 text-white bg-black w-full backdrop-blur-lg"
                : "absolute -bottom-8 left-4 z-30"
            }
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="font-bold text-sm md:text-2xl  uppercase"
            >
              {title}
            </motion.h1>
          </motion.span>
        </div>

        {/* Expandable Content */}
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-slate-500 mt-8"
            style={{ height: "fit-content" }}
          >
            <h1 className="bg-black text-white p-2 md:p-4 text-xl md:text-3xl underline underline-offset-8">
            {title}
            </h1>
            <h1 className="bg-black text-white p-2 md:p-4 text-xl md:text-2xl">
              Project Description
            </h1>
            <p className="bg-black text-white p-2 md:p-4 text-sm md:text-base">
              {desc}
            </p>
            {data.map((item, index) => (
              <div key={index} className="p-2 md:p-4 bg-black">
                <h2 className="font-bold">{item.title}</h2>
                {item.features.map((feature, idx) => (
                  <div key={idx} className="text-sm md:text-base flex">
                    <li>{feature}</li>
                  </div>
                ))}
              </div>
            ))}
            <h1 className="bg-black text-white p-2 md:p-4 text-xl md:text-2xl">
              Tech Stack
            </h1>
            <div className="bg-black text-white p-2 md:p-4 flex flex-wrap gap-1">
              {techStacks.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block text-slate-300 opacity-70 hover:text-white hover:opacity-100"
                >
                  {tech},
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default ProjectExpandableCard;
