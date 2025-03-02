import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./NavBar.css";
import { AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";
import { Link } from "react-scroll";
import Animation from "../assets/Animation.webm";

function NavBar() {
  const messages = [
    "Hi ✋🏼 I'm  Ajardeen",
    "Welcome to my portfolio",
    "Take a look at my skills",
    "Explore my projects",
    "Lets Work Together",
    "Let's connect",
    "Thanks for visiting",
    "Have a great day",
    "Being a developer is my passion",
    "I love what I do",
    "I'm always learning and growing",
    "I'm a problem solver",
    "I'm a team player",
    "I'm a creative thinker",
    "I'm a hard worker",
    "I'm a good communicator",

  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prevMessage) => {
        const currentIndex = messages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
      setShowMessage(true);
    }, 20000); // Change message every 20 seconds

    return () => clearInterval(messageInterval);
  }, [messages]);

  useEffect(() => {
    const hideMessageTimeout = setTimeout(() => {
      setShowMessage(false);
    }, 5000); // Hide message after 5 seconds

    return () => clearTimeout(hideMessageTimeout);
  }, [currentMessage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
      className="px-3 py-2  rounded-t-3xl text-sm fixed bottom-0 flex justify-around items-center z-30 w-72 lg:w-96 backdrop-blur-lg shadow-sm shadow-slate-700"
    >
      <div className="relative group">
        <video src={Animation} autoPlay loop muted className="w-10 h-10" />
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-full mb-2 bg-gray-700 text-white text-xs rounded py-2 px-2 w-44 text-center"
          >
            {currentMessage}
          </motion.div>
        )}
      </div>
      <Link smooth={true} offset={-50} duration={500} to="heroSection">
        <span className="nav-item flex flex-col justify-center items-center cursor-pointer hover:text-white text-slate-400">
          <AiOutlineUser /> About
        </span>
      </Link>
      <Link smooth={true} offset={-50} duration={500} to="work">
        <span className="nav-item flex flex-col justify-center items-center cursor-pointer hover:text-white text-slate-400">
          <AiOutlineProject /> Work
        </span>
      </Link>
      <Link smooth={true} offset={-50} duration={500} to="skills">
        <span className="nav-item flex flex-col justify-center items-center cursor-pointer hover:text-white text-slate-400">
          <GiSkills /> Skills
        </span>
      </Link>
      <Link smooth={true} offset={-50} duration={500} to="contact">
        <span className="nav-item flex flex-col justify-center items-center cursor-pointer hover:text-white text-slate-400">
          <MdOutlineContactMail /> Contact
        </span>
      </Link>
    </motion.div>
  );
}

export default NavBar;
