import React from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const imagelink =
  "data:image/png;base64,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";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 text-center mb-8 md:mb-0">
            <img src={imagelink} alt="Logo" className="w-64 mx-auto mb-4" />
            <p className="text-2xl font-bold mt-12 text-left">Newsletter</p>
            <div className="flex items-center mt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-r-lg ml-2 md:ml-0 mt-2 md:mt-0">
                Subscribe
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">Policies</h2>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Almond Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">Socials</h2>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="flex items-center text-gray-300 mb-2">
                <FaPhone className="mr-2" /> +91 6364840327
              </p>
              <p className="flex items-center text-gray-300 mb-2">
                <FaEnvelope className="mr-2" />{" "}
                <a
                  href="mailto:join@almnd.in"
                  className="text-gray-300 hover:text-white"
                >
                  join@almnd.in
                </a>
              </p>
              <p className="text-gray-300">
                <FaMapMarker className="mr-2" /> 2nd Floor, Emirates Arcade, 80
                Feet Rd,
                <br />
                behind Water Tank, Manchegowdana koppalu,
                <br />
                II Stage, Vijayanagar, Mysuru, Karnataka 570017
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <hr className="border-white w-full" />
        <p className="text-white text-4xl">
          © 2023 First Floor Infotech Private Limited All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
