import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className=" bg-[#1e1e1f] text-white py-6 mt-12 border-4 border-[#bca067] rounded-lg" // Added border around the footer with rounded corners
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 w-full text-center"> {/* Ensuring proper width alignment */}
        <p className="text-lg">&copy; {new Date().getFullYear()} Your Kulinary Kompass. All Rights Reserved.</p>
        
        {/* Links with hover animation */}
        <div className="mt-4">
          <a
            href="#home" // Link to the Home section
            className="text-[#bca067] hover:text-white transition duration-300 mx-2"
          >
            Home
          </a>
          <a
            href="#about" // Link to the About section
            className="text-[#bca067] hover:text-white transition duration-300 mx-2"
          >
            About
          </a>
          <a
            href="#gallery" // Link to the Gallery section
            className="text-[#bca067] hover:text-white transition duration-300 mx-2"
          >
            Gallery
          </a>
          <a
            href="#contact" // Link to the Contact section
            className="text-[#bca067] hover:text-white transition duration-300 mx-2"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
