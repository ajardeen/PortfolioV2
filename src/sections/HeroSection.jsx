import React, { useState, useEffect } from "react";
import { RevealText } from "../components/RevealText";
import ShinyButton from "../components/ShinyButton";
import "./HeroSection.css";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../assets/Arrow.webm";
import { GrLocationPin } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../components/CustomCursor.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoCopy } from "react-icons/go";
import profile from "../assets/profile-anime.jpg";
import OverlayText from "../components/OverlayText";
import LocationCard from "../components/LocationCard";
function HeroSection() {
  const [reveal, setReveal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const email = "mnazar87540@gmail.com";


  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 1000);
    setTimeout(() => {
      setReveal(false);
    }, 10000);
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
      className="relative px-4 sm:px-6 md:px-2  hero-section flex flex-wrap justify-center items-center xl:flex-nowrap lg:h-[34rem] overflow-hidden" 
      id="heroSection"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex flex-col justify-start items-start xl:justify-center xl:items-center py-1"
        layout
      >
        <motion.div className="w-full md:w-[50rem] flex flex-col md:justify-start items-start my-5">
          <LocationCard />
          <hr />
          <div className="hover-target border p-1 ">
            <div className="flex flex-shrink gap-3 justify-start ">
              <RevealText text={"Hello"} /> 
            </div>
            
          </div>
          

          <div className="mt-5 w-full md:w-10/12 ">
            <motion.p
              initial={{ opacity: 0, }}
              animate={{ opacity: 1,}}
              transition={{duration:0.5,delay:0.2}}
              className="text-gray-400 hover-target text-[10px] leading-4  md:text-base md:leading-7 text-left"
            >
              
              I'm  Mohamed Ajardeen
              <span className="font-bold  p-0.5 mx-1">
                Certified Full-Stack Developer
              </span>{" "}
              from GUVI with hands-on experience in building dynamic and
              scalable web applications. I specialize in{" "}
              <span className="mx-1 font-semibold text-black  bg-slate-400 rounded-md px-0.5 ">
                React.js
              </span>
              ,{" "}
              <span className="mx-1 font-semibold text-black  bg-slate-400 rounded-md px-0.5 ">
                Express.js
              </span>
              ,
              <span className="mx-1 font-semibold text-black  bg-slate-400 rounded-md px-0.5 ">
                Node.js
              </span>
              , and{" "}
              <span className="mx-1 font-semibold text-black  bg-slate-400 rounded-md px-0.5 ">
                MongoDB
              </span>
              , crafting seamless user experiences with clean code and modern
              development practices.
            </motion.p>

            {/* Social Links */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mt-6">
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
            <motion.a 
                href={`mailto:${email}?subject=Inquiry from your Portfolio`} // Mailto link here
                onClick={handleEmailClick}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                className="border-b px-4 py-2 flex justify-center items-center gap-2 text-sm md:text-base"
              >
                <GoCopy /> Email
              </motion.a>
            </motion.div>

            <div className="flex items-center justify-start py-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <ShinyButton />
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="relative w-[310px] h-[310px] lg:w-[500px] lg:h-[510px] overflow-hidden rounded-xl">
        <motion.div
          id="tilt div"
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            rotateY: 5,
            transition: { duration: 0.3 },
          }}
          style={{ perspective: 1000 }}
        >
          <span className=""> 
            <motion.img
              className="w-[inherit] object-cover"
              src={profile}
              alt="profile"
              // whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute -bottom-3 sm:bottom-5 lg:bottom-5 w-full z-10">
              {" "}
              <OverlayText text={"Mohamed Ajardeen"} />
            </div>
          </span>
        </motion.div>
      </div>      {/* Pop-up Notification */}
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
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HeroSection;
