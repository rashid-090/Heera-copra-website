import React from "react";
import { motion } from "framer-motion";
import { LogoFav } from "../assets";

const FullScreenLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }} // Start fully visible
      animate={{ opacity: 1 }} // Fully visible while loading
      exit={{ opacity: 0 }} // Fade-out when unmounted
      transition={{ duration: 0.5 }} // Smooth fade duration
      className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50"
    >
      <div className="relative w-20 h-20 xl:w-28 xl:h-28">
        {/* Running Effect Circle */}
        <div className="absolute inset-0 w-full h-full rounded-full animate-spin bg-gradient-to-r from-[#ee1c26] to-transparent">
          <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-full m-[2px]"></div>
        </div>

        {/* Centered Logo */}
        <img
          src={LogoFav} // Replace with your logo path
          alt="Logo"
          loading="lazy"
          className="absolute inset-0 w-8 h-8 xl:w-14 xl:h-14 object-contain m-auto"
        />
      </div>
    </motion.div>
  );
};

export default FullScreenLoader;
