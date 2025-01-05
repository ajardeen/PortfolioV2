import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
function ProjectExpandableCard({ title, desc, techStacks, images, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hide, setHide] = useState(false);

  // Navigate to the next image manually
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image manually
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 500);
    setHide(false);

  },[isOpen])

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
        className={`p-4 cursor-pointer no-scrollbar bg-black border border-black  hover:border-slate-300 overflow-y-scroll rounded-lg 
                ${
                  isOpen
                    ? "fixed z-50 hover:border-none h-[90vh] top-4 left-4 right-4 md:top-20 md:left-[20vw] md:right-[20vw] lg:left-[25vw] lg:right-[25vw]"
                    : "w-full md:w-[45vw] lg:w-[30vw]"
                }`}
        layout
      >
        {/* Carousel Slider */}
        <div className={!isOpen ? "relative" : "relative h-[23vh] lg:h-[51vh]"}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`project image ${currentImageIndex}`}
            className={
              "w-full object-cover rounded-lg" +
              (isOpen ? "h-[30vh] lg:h-[50vh]" : " h-[30vh]")
            }
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            layout
          />

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
              className="font-bold text-sm md:text-2xl xl:text-3xl uppercase "
            >
              {title}
            </motion.h1>
          </motion.span>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            {hide && (<>
              <button
              onClick={prevImage}
              className="bg-black bg-opacity-50 text-white px-1 py-4 rounded-xl hover:bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineLeft size={24} /> {/* Left Arrow Icon */}
            </button>
            <button
              onClick={nextImage}
              className="bg-black bg-opacity-50 text-white px-1 py-4 rounded-xl hover:bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineRight size={24} /> {/* Right Arrow Icon */}
            </button>
            </>)}
          </div>
        </div>
        {/* Expandable Content */}
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-slate-500 mt-8 "
            style={{
              height: "fit-content",
            }}
          >
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
                  <div
                    key={idx}
                    className="text-sm md:text-base flex items-center gap-2"
                  >
                    <div className="border rounded-full size-1"></div>
                    {feature}
                  </div>
                ))}
              </div>
            ))}
            <h1 className="bg-black text-white p-2 md:p-4 text-xl md:text-2xl">
              Tech Stack
            </h1>
            <div className="bg-black text-white p-2 md:p-4 space-x-2 flex flex-wrap">
              {techStacks.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block text-slate-300 opacity-70 px-3 py-1 hover:text-white hover:opacity-100"
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
