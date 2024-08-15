import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Sajan Investment</h3>
            <p className="text-sm">
              Empowering businesses through expert consulting.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-300 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl hover:text-blue-300 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-blue-300 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-blue-300 transition duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Sajan Investment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
