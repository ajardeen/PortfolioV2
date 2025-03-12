import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectOverlayText from "./ProjectOverlayText";

function ProjectExpandableCard({
  title,
  desc,
  techStacks,
  images,
  data,
  frontEndCodeUrl,
  backEndCodeUrl,
  demoUrl,
  video
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hide, setHide] = useState(false);
  const [showGithubLinks, setShowGithubLinks] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images.length + (video ? 1 : 0)));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length + (video ? 0 : -1) : prevIndex - 1
    );
  };

  useEffect(() => {
    setTimeout(() => setHide(true), 500);
    setHide(false);
  }, [isOpen]);

  const handleGithubClick = (e) => {
    e.stopPropagation();
    setShowGithubLinks(!showGithubLinks);
  };

  const renderMedia = () => {
    if (currentImageIndex === images.length && video) {
      return (
        <motion.video
          key="video"
          autoPlay
          muted
          loop
          className={`w-full object-cover rounded-lg ${
            isOpen ? "h-[23vh] lg:h-[51vh]" : "h-[30vh]"
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          layout
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      );
    }
    return (
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
        loading="lazy"
      />
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 cursor-pointer bg-black/50  border border-black hover:border-slate-300 overflow-y-scroll rounded-lg no-scrollbar 
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
          {renderMedia()}

          {/* Top-right icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-2 right-2 flex space-x-2 z-20"
          >
            <div className="relative">
              <button
                className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
                onClick={handleGithubClick}
              >
                <FaGithub size={18} />
              </button>
              {showGithubLinks && (
                <div className="absolute right-0 mt-2 w-32 bg-black bg-opacity-90 rounded-lg shadow-lg">
                  {frontEndCodeUrl && (
                    <a
                      href={frontEndCodeUrl}
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Frontend Code
                    </a>
                  )}
                  {backEndCodeUrl && (
                    <a
                      href={backEndCodeUrl}
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Backend Code
                    </a>
                  )}
                </div>
              )}
            </div>
            <a
              href={demoUrl}
              target="_blank"
              className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </motion.div>

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
                  <AiOutlineRight size={25} />
                </motion.button>
              </>
            )}
          </motion.div>

          {/* Title */}
          {!isOpen && (
            <motion.span className="absolute bottom-0 left-0 text-white bold w-full">
              <ProjectOverlayText text={title} />
            </motion.span>
          )}
        </div>

        {/* Non-expanded Content */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-white overflow-hidden "
          >
           <motion.span
           initial={{width:0}}
           whileInView={{width:"100%"}}
           transition={{duration:0.5,delay:0.5}}
           className="block"> <hr /></motion.span>
            <motion.p 
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.5}}
            className="text-xs mb-2 line-clamp-2 mt-3 ml-2 uppercase">{desc}</motion.p>
            <motion.div 
             initial={{opacity:0,y:50}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.8}}
            className="flex flex-wrap gap-2 py-4">
              {techStacks.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs md:text-xs bg-slate-800 rounded-full text-slate-300 hover:bg-slate-700 transition-colors"  
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Expandable Content */}
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-black/10 mt-8"
            style={{ height: "fit-content" }}
          >
            <h1 className=" text-white p-2 md:p-4 text-xl md:text-3xl underline underline-offset-8">
              {title}
            </h1>
            <h1 className=" text-white p-2 md:p-4 text-xl md:text-2xl">
              Project Description
            </h1>
            <p className=" text-white p-2 md:p-4 text-sm md:text-base">
              {desc}
            </p>
            {data.map((item, index) => (
              <div key={index} className="p-2 md:p-4 ">
                <h2 className="font-bold">{item.title}</h2>
                {item.features.map((feature, idx) => (
                  <div key={idx} className="text-sm md:text-base flex">
                    <li>{feature}</li>
                  </div>
                ))}
              </div>
            ))}
            <h1 className=" text-white p-2 md:p-4 text-xl md:text-2xl">
              Tech Stack
            </h1>
            <div className=" text-white p-2 md:p-4 flex flex-wrap gap-2">
              {techStacks.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800 rounded-full text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  {tech}
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