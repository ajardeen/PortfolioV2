import React, { useState, useEffect } from "react";
import "./CustomCursor.css";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX + (isHovering ? -50 : -10), y: event.clientY + (isHovering ? -50 : -10) });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  useEffect(() => {
    // Add event listeners for hover targets
    const hoverTargets = document.querySelectorAll(".hover-target");
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? "hover-active" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      transition={{ duration: 0,delay:0}}
    />
  );
};

export default CustomCursor;
