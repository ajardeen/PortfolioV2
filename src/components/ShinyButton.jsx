import { motion } from "framer-motion";
import "./ShinyButton.css";
import { useState } from "react";
import resume from "../resume/Mohamed Ajardeen Resume.pdf"
import { IoCloudDownloadOutline } from "react-icons/io5";

const ShinyButton = () => {
  const [text, setText] = useState("Resume");
  const [click, setClick] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setText("Downloading...");
    setClick(true);

    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Mohamed Ajardeen Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setText("Thank You! Looking forward to hearing from you");
      setTimeout(() => {
        setClick(false);
        setText("Your Solution Starts Here");
      }, 4000);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center">
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
        onClick={handleDownload}
        className="px-6 py-2 rounded-md relative radial-gradient"
      >
        <motion.span 
          layout
          className={!click ? "text-neutral-100 flex gap-1 justify-start items-center text-sm lg:text-lg tracking-wide font-light h-full w-full  relative linear-mask" : "text-green-500 text-sm lg:text-lg tracking-wide font-light h-full w-full block relative linear-mask"}>
          {text} <motion.span 
          initial={{ y: -3 }}
          animate={{ y: 0 }}
         transition={{ duration: 0.8 ,repeat:Infinity,repeatDelay:2,type:"spring",stiffness:10,repeatType:"reverse"}}
          
          ><IoCloudDownloadOutline /></motion.span>
        </motion.span>
        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.button>
      {downloading && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-1 bg-green-500 mt-2 rounded-full"
          style={{ width: "200px" }}
        />
      )}
    </div>
  );
};

export default ShinyButton;