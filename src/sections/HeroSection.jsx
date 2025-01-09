import React, { useState, useEffect } from "react";
import { RevealText } from "../components/RevealText";
import ShinyButton from "../components/ShinyButton";
import "./HeroSection.css";
import { motion ,AnimatePresence} from "framer-motion";
import arrow from "../assets/Arrow.webm";
import { GrLocationPin } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../components/CustomCursor.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoCopy } from "react-icons/go";

function HeroSection() {
  const [reveal, setReveal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 1000);
    setTimeout(() => {
      setReveal(false);
    }, 30000);
  }, []);

const handleEmailClick = () => {
  const email = "mnazar87540@gmail.com";
  navigator.clipboard.writeText(email);
  setShowPopup(true);
  setTimeout(() => {
    setShowPopup(false);
  }, 5000);
};


  return (
    <section
      className="relative px-4 sm:px-6 md:px-20 pt-4 hero-section"
      id="heroSection"
    >
      <RevealText text={"MOHAMED"} />
      <RevealText text={"AJARDEEN"} />

      {reveal && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="flex absolute top-4 left-[50%]  lg:left-[30%] items-center"
        >
          <video src={arrow} autoPlay muted className="rotate-180 w-12 h-12 lg:w-20 lg:h-20" />
          <h2 className="font-extrabold text-lg">It's me</h2>
        </motion.span>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        drag={true}
        whileDrag={{ scale: 0.9, opacity: 0.5 }}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="relative flex flex-col justify-start items-start xl:justify-center xl:items-center py-10"
        layout
      >
        <motion.div className="w-full md:w-[50rem] flex flex-col justify-start items-start my-5">
          <div className="hover-target border p-1 ">
            <div className="flex flex-shrink gap-3 justify-start  ">
              <RevealText text={"MERN"} />
              <RevealText text={"STACK"} />
              <RevealText text={"DEVELOPER"} />
            </div>
          </div>

          <div className="mt-5 w-full md:w-10/12 ">
            <p className="text-gray-400 text-sm md:text-base leading-6 text-left ">
              I Build seamless full-stack web applications using{" "}
              <span className="font-semibold text-gray-100">React.js</span>,{" "}
              <span className="font-semibold text-gray-100">Node.js</span>,{" "}
              <span className="font-semibold text-gray-100">Express.js</span>,
              and &nbsp;
              <span className="font-semibold text-gray-100">MongoDB</span>. My
              portfolio showcases diverse projects that combine clean code,
              intuitive design, and modern development principles.
            </p>

            <div className="flex items-center text-sm mt-4">
              <GrLocationPin size={20}  className="text-red-400  animate-bounce" />
              <span className="ml-2">
                Thiruvamiyur | <strong>Chennai</strong>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/ajardeen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 text-2xl transition duration-300"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/s-mohamed-ajardeen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 text-2xl transition duration-300"
              >
                <FaLinkedin size={25} />
              </a>
              <motion.button
              onClick={handleEmailClick}
                initial={{ opacity: 0, y: -50}} // Slightly smaller on initial load
                animate={{ opacity: 1, y: 0, scale: 1 }} // Scales to normal size on animation completion
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }} // Slightly smaller on tap for feedback
               
                className="border px-4 py-2 flex justify-center items-center gap-2 text-sm md:text-base"
              >
                <GoCopy /> Email
              </motion.button>
            </div>

            <div className="flex items-center justify-start py-6">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl"
              >
                {"<"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              >
                <ShinyButton />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl"
              >
                {"/>"}
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.div>
        {/* Pop-up Notification */}
        <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed flex justify-start items-center gap-2 top-4 right-4 bg-white text-black rounded-lg shadow-lg p-4 sm:p-6 w-fit max-w-sm lg:text-lg"
          >
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
            >
              <MdOutlineMarkEmailRead className="text-green-500  text-2xl lg:text-4xl" />
            </motion.span>
            <div className="flex  items-center w-full justify-between">
              <span>Email Copied</span>
              <button
                onClick={() => setShowPopup(false)}
                className="text-black hover:text-red-700 text-4xl"
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HeroSection;
