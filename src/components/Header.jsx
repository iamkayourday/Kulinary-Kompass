import React, { useState } from 'react';
import { FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import { MdSearch, MdDarkMode, MdMenu } from 'react-icons/md';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4">
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
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-lg hover:text-[#bca067]" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-lg hover:text-[#bca067]" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="text-lg hover:text-[#bca067]" />
          </a>
        </div>

        {/* Logo Text */}
        <h1 className="text-xl md:text-2xl font-serif italic text-[#bca067] text-center">
          Kulinary Kompass
        </h1>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          <MdDarkMode className="text-lg hover:text-[#bca067] cursor-pointer" title="Toggle Dark Mode" />
          <MdSearch className="text-lg hover:text-[#bca067] cursor-pointer" title="Search" />
          <MdMenu
            className="text-lg hover:text-[#bca067] cursor-pointer md:hidden"
            onClick={toggleMenu}
            title="Menu"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`mt-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} md:block`}
      >
        <ul
          className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 py-3 rounded-3xl border border-[#bca067] mx-auto w-full max-w-6xl"
          style={{
            borderTopWidth: '2px',
            borderBottomWidth: '4px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <li>
            <a href="#home" className="hover:text-[#bca067] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#bca067] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#recipes" className="hover:text-[#bca067] transition-colors">
              Recipes
            </a>
          </li>
          <li>
            <a href="#books" className="hover:text-[#bca067] transition-colors">
              Books
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#bca067] transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
