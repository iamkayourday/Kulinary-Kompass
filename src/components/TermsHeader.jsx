import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdEmail } from 'react-icons/md';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import useLocation and RouterLink

const TermsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false); // Commented out dark mode
  const location = useLocation(); // Get the current location

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark mode and update localStorage (commented out)
  // const toggleDarkMode = () => {
  //   const newMode = !isDarkMode;
  //   setIsDarkMode(newMode);
  //   localStorage.setItem('dark-mode', newMode); // Save the preference
  //   document.documentElement.classList.toggle('dark', newMode); // Apply dark mode class
  // };

  // Initialize dark mode based on localStorage on page load (commented out)
  // useEffect(() => {
  //   const storedMode = localStorage.getItem('dark-mode') === 'true'; // Get stored preference
  //   setIsDarkMode(storedMode);
  //   document.documentElement.classList.toggle('dark', storedMode); // Apply dark mode class
  // }, []);

  // Close the menu when a navigation link is clicked (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if the current route is "/terms-and-conditions"
  const isTermsPage = location.pathname === '/terms-and-conditions';

  // Only render the TermsHeader when on the "/terms-and-conditions" route
  if (!isTermsPage) return null;

  return (
    <header className="p-4 sticky top-0 z-50 bg-[#1e1e1f] text-white">
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
        </div>

        {/* Logo Text */}
        <h1 className="text-xl md:text-2xl font-serif italic text-[#bca067] text-center">
          Kulinary Kompass
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
            <RouterLink
              to="/" // Link to homepage
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu} // Close the menu when this link is clicked
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/" // Link to homepage
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/" // Link to homepage
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Gallery
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/" // Link to homepage
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Contact
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="" // Link to homepage
              className="hover:text-[#bca067] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Terms and Conditions
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TermsHeader;
