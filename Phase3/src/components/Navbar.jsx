// src/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Instagram from '../assets/icons/instagram.png';
import Tiktok from '../assets/icons/tiktok.png';
import Facebook from '../assets/icons/facebook.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-[#061C2C]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Social Media Links */}
          <div className="flex gap-3">
            <p>Connect with Us</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <img src={Facebook} className="h-6" alt="Facebook" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <img src={Tiktok} className="h-6" alt="TikTok" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <img src={Instagram} className="h-6" alt="Instagram" />
              </a>
            </div>
          </div>

          {/* Right Side - Burger Menu */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="home" // Use the ID of the section
            smooth={true}
            duration={500}
            className="hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="footer" // Use the ID of the section
            smooth={true}
            duration={500}
            className="hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="footer" // Use the ID of the section
            smooth={true}
            duration={500}
            className="hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
