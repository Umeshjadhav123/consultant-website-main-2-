import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo-removebg-preview.png";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const socialListRef = useRef(null);

  useEffect(() => {
    gsap.from(socialListRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container mx-auto pt-16">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <section className="cta mt-16" aria-label="call to action">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Invest?</h2>
              <p className="mb-6 text-gray-700">
                Contact us today to start planning your financial future with
                our expert investment consulting services.
              </p>
              <a
                href="#contact"
                className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </div>
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            {/* <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div> */}
            <Input
              labelName="Name"
              type="text"
              value={formData.name}
              onChangeFunction={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="footer bg-gray-800 text-white p-16 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo} width="104" height="24" alt="Adex home" />
            </a>
            <p className="footer-text mt-4">
              &copy; 2024 sajan investment consultant <br /> All rights
              reserved.
            </p>
            <ul ref={socialListRef} className="social-list flex space-x-4 mt-4">
              <li>
                <Link to="#" className="social-link transition duration-300">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link transition duration-300">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link transition duration-300">
                  <FaDribbble />
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link  transition duration-300">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link  transition duration-300">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="h4 font-bold mb-4">Get in Touch</p>
            <address className="footer-text mb-2">Address</address>
            <a
              href="mailto:sajaninvestmentconsultant@gmail.com"
              className="footer-link block mb-2"
            >
              sajaninvestmentconsultant@gmail.com
            </a>
            <a href="tel:70577150930" className="footer-link block">
              7057715093
            </a>
          </div>

          <div className="footer-list">
            <p className="h4 font-bold mb-4">Learn More</p>
            <ul>
              <li className="mb-2">
                <Link
                  to="#"
                  className="footer-link text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="footer-link text-gray-400 hover:text-white transition duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="footer-link text-gray-400 hover:text-white transition duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="footer-link text-gray-400 hover:text-white transition duration-300"
                >
                  Terms of Use
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="footer-link text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="h4 font-bold mb-4">Our Newsletter</p>
            <p className="footer-text mb-4">
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>
            <form className="input-wrapper flex">
              <input
                type="email"
                name="email_address"
                placeholder="Email Address"
                required
                className="input-field flex-1 px-4 py-2 rounded-l-lg border-none"
              />
              <button
                type="submit"
                className="submit-btn bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-r-lg transition duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </footer>

      <div className="bg-white h-px"></div>
    </div>
  );
};

export default Contact;

export const Footer = () => {
  const formRef = useRef(null);
  const newsletterRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.from(newsletterRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });
    gsap.from(buttonsRef.current.children, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div ref={newsletterRef} className="text-center">
          <h4 className="text-2xl font-bold mb-4">Our Newsletter</h4>
          <p className="text-lg mb-6">
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>
          <form ref={formRef} className="flex justify-center">
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              required
              className="px-4 py-2 w-full max-w-xs rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg transition duration-300"
            >
              Join
            </button>
          </form>
        </div>
        <div ref={buttonsRef} className="mt-8 flex justify-center space-x-4">
          <button
            id="loginButton"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Login
          </button>
          <button
            id="signupButton"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
};
