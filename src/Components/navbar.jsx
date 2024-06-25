import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Product from "./product";
import HiringPartners from "./hiringPartners";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center p-6 sticky top-0 bg-white">
        <div>
          <img
            src="data:image/png;base64,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"
            alt="Logo"
            className="w-full h-12"
          />
        </div>
        <div onClick={toggleMenu}>
          <FiAlignJustify className="text-5xl cursor-pointer " />
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="flex flex-col items-center justify-center text-3xl">
            <Link
              to="/"
              className="p-3 text-red-500 underline hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/full-stack"
              className="p-3 hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Full-Stack
            </Link>
            <Link
              to="/front-end"
              className="p-3 hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Front-End
            </Link>
            <Link
              to="/back-end"
              className="p-4 hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Back-End
            </Link>
            <Link
              to="/mobile-app"
              className="p-3 hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Mobile Application
            </Link>
            <Link
              to="/graphic-design"
              className="p-3 hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Graphic Design
            </Link>
            <Link
              to="/manual-testing"
              className="p-3 hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Manual Testing
            </Link>
            <Link
              to="/contact"
              className="p-3 hover:text-red-500 hover:underline"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <button
              className="text-blue-500  border border-blue-500 border-solid py-2 px-4 rounded mt-4 w-1/4"
              onClick={toggleMenu}
            >
              Free Workshop
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded mt-2 w-1/4"
              onClick={toggleMenu}
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
      <div>
        <Product />
        <HiringPartners />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
