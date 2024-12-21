import React, { useState, useEffect } from 'react';
import { FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import { MdDarkMode, MdLightMode, MdMenu, MdClose, MdPhone, MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('dark-mode', newMode); // Save the preference
    document.documentElement.classList.toggle('dark', newMode); // Apply dark mode class
  };

  // Initialize dark mode based on localStorage on page load
  useEffect(() => {
    const storedMode = localStorage.getItem('dark-mode') === 'true'; // Get stored preference
    setIsDarkMode(storedMode);
    document.documentElement.classList.toggle('dark', storedMode); // Apply dark mode class
  }, []);

  // Close the menu when a navigation link is clicked (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`p-4 ${isDarkMode ? 'bg-[#1e1e1f] text-white' : 'bg-[#ebe7e4] text-black'}`}>
      {/* Header Wrapper */}
      <div
        className="flex items-center justify-between gap-4 px-6 py-3 rounded-3xl border border-[#bca067] mx-auto w-full max-w-6xl"
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
          <a href="tel:00553123-2323" target="_blank" rel="noopener noreferrer">
            <MdPhone className="text-lg hover:text-[#bca067]" />
          </a>
        </div>

        {/* Logo Text */}
        <h1 className="text-xl md:text-2xl font-serif italic text-[#bca067] text-center">
          Kulinary Kompass
        </h1>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          {isDarkMode ? (
            <MdLightMode
              className="text-lg hover:text-[#bca067] cursor-pointer"
              title="Switch to Light Mode"
              onClick={toggleDarkMode}
            />
          ) : (
            <MdDarkMode
              className="text-lg hover:text-[#bca067] cursor-pointer"
              title="Switch to Dark Mode"
              onClick={toggleDarkMode}
            />
          )}
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
          className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 py-3 rounded-3xl border border-[#bca067] mx-auto w-full max-w-6xl"
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
