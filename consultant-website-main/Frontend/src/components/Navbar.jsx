import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaHome, FaInfoCircle, FaEnvelope, FaBriefcase } from "react-icons/fa";
import logo from "../assets/logo-removebg-preview.png";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current.children, {
      opacity: 0,
      y: -50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav ref={navRef} className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between py-0">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="rounded-full overflow-hidden font-semibold text-gray-500 text-lg">
                  <img
                    src={logo}
                    alt="logo"
                    className="scale-[1.4] h-16 w-16 -ml-0.5 -mb-2 -mt-1"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
            >
              <FaHome className="inline-block mr-1" /> Home
            </Link>
            <Link
              to="/services"
              className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
            >
              <FaBriefcase className="inline-block mr-1" /> Services
            </Link>
            <Link
              to="/about"
              className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
            >
              <FaInfoCircle className="inline-block mr-1" /> About
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
            >
              <FaEnvelope className="inline-block mr-1" /> Contact
            </Link>
            <Link
              to="/consultation"
              className="transition duration-300 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block"
            >
              Get a Consultation
            </Link>
          </div>
          <div className="flex flex-col md:hidden">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="text-gray-300 hover:text-blue-300 focus:outline-none pt-8"
            >
              {openNav ? (
                <div className="flex justify-end">
                  <IoCloseSharp className="scale-[2]" />
                </div>
              ) : (
                <IoMenu className="scale-[2] -translate-x-1 w-4" />
              )}
            </button>
            {openNav && (
              <div className="md:hidden flex flex-col items-center space-y-1 pb-4">
                <Link
                  to="/"
                  className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
                >
                  <FaHome className="inline-block mr-1" /> Home
                </Link>
                <Link
                  to="/services"
                  className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
                >
                  <FaBriefcase className="inline-block mr-1" /> Services
                </Link>
                <Link
                  to="/about"
                  className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
                >
                  <FaInfoCircle className="inline-block mr-1" /> About
                </Link>
                <Link
                  to="/contact"
                  className="py-4 px-2 text-gray-300 hover:text-blue-300 transition duration-300"
                >
                  <FaEnvelope className="inline-block mr-1" /> Contact
                </Link>
                <Link
                  to="/consultation"
                  className="transition duration-300 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block"
                >
                  Get a Consultation
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
