import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";



const Footer = () => {
    return (
        <footer className="w-full h-52 bg-black text-white flex flex-col items-center justify-center  border-t-2 border-gray-600">
            <div className="flex space-x-4">
                <a href="https://github.com/ajardeen" target="_blank" rel="noopener noreferrer" className="flex gap-3">
                   GitHub <AiFillGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/s-mohamed-ajardeen/" target="_blank" rel="noopener noreferrer" className="flex gap-3">
                   Linkedin <AiFillLinkedin size={30} />
                </a>
            </div>
            <p className="mt-4 text-xs ">&copy; {new Date().getFullYear()} Mohamed Ajardeen . All rights reserved.</p>
        </footer>
    );
};

export default Footer;