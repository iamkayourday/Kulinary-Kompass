import React, { useState, useEffect } from 'react';
import { FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import { MdMenu, MdClose, MdPhone, MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false); // Commented out dark mode logic

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark mode and update localStorage
  // const toggleDarkMode = () => { // Commented out dark mode toggle function
  //   const newMode = !isDarkMode;
  //   setIsDarkMode(newMode);
  //   localStorage.setItem('dark-mode', newMode); // Save the preference
  //   document.documentElement.classList.toggle('dark', newMode); // Apply dark mode class
  // };

  // Initialize dark mode based on localStorage on page load
  // useEffect(() => { // Commented out dark mode initialization
  //   const storedMode = localStorage.getItem('dark-mode') === 'true'; // Get stored preference
  //   setIsDarkMode(storedMode);
  //   document.documentElement.classList.toggle('dark', storedMode); // Apply dark mode class
  // }, []); 

  // Close the menu when a navigation link is clicked (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`p-4 bg-[#1e1e1f] text-white sticky top-0 z-50`}>
      {/* Header Wrapper */}
      <div
        className="flex items-center justify-between gap-4 px-6 py-3 rounded-3xl border border-[#bca067] mx-auto w-full max-w-7xl"
        style={{
          borderTopWidth: '2px',
          borderBottomWidth: '4px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Social Media Icons */}
        <div className="flex gap-3">
          <a href="mailto:hello@kulinarykompass.co.uk" target="_blank" rel="noopener noreferrer">
            <MdEmail className="text-lg hover:text-[#bca067]" />
          </a>
          {/* <a href="tel:00553123-2323" target="_blank" rel="noopener noreferrer">
            <MdPhone className="text-lg hover:text-[#bca067]" />
          </a> */}
        </div>

        {/* Logo Text */}
        <h1 className="text-xl md:text-2xl font-serif italic text-[#bca067] text-center">
          Kulinary Kompas
        </h1>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          {isMenuOpen ? (
            <MdClose
              className="text-lg hover:text-[#bca067] cursor-pointer md:hidden"
              onClick={toggleMenu}
              title="Close Menu"
            />
          ) : (
            <MdMenu
              className="text-lg hover:text-[#bca067] cursor-pointer md:hidden"
              onClick={toggleMenu}
              title="Open Menu"
            />
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`mt-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul
          className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 py-3 rounded-3xl border border-[#bca067] mx-auto w-full max-w-7xl"
          style={{
            borderTopWidth: '2px',
            borderBottomWidth: '4px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu} // Close the menu when this link is clicked
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <RouterLink
              to="/terms-and-conditions" // Link to the terms and conditions page
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu} // Close the menu when this link is clicked
            >
              Terms and Conditions
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
