// src/components/Footer.jsx
import React from 'react';
import NexusSyncSolutions from '../assets/images/nexusLogo.png';
import NMULogo from '../assets/images/nmuLogo.png';

const Footer = () => {
  return (
    <footer className="text-[#061C2C] py-8 px-8 bg-[#FECA1F]" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About Section */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">About Us</h4>
          <p className="text-white" id="about ">
            Phase 3 Residence is a hub of excellence and champions. Our goal is to build a bright future for all our residents.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-white hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="#about" className="text-white hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="text-white hover:underline">Contact</a>
            </li>
            <li className="mb-2">
              <a href="#events" className="text-white hover:underline">Events</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div >
          <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
          <p className="text-white mb-2">
            <strong>Address:</strong> Gardham Avenue, Summerstrand, Port Elizabeth
          </p>
          <p className="text-white mb-2">
            <strong>Phone:</strong> +27 (0)41 504 2921, +27 (0)41 504 3974, +27 (0)41 504 1854
          </p>
          <p className="text-white mb-2">
            <strong>Email:</strong> contact@phase3residence.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-white">
        <p>&copy; 2024 Nexus Sync Solutions. All rights reserved.</p>
        {/* Social Media Icons */}
        <div className="mt-4 space-x-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>

      <div className="flex h-14 gap-20 justify-center">
        <img src={ NexusSyncSolutions } alt="Nexus Sync Logo" />
        <img src={ NMULogo } alt="Nelson Mandela University Logo" />
      </div>
    </footer>
  );
};

export default Footer;
