import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t shadow md:flex md:items-center md:justify-between md:p-6 bg-slate-900 border-gray-600">
      <span className="text-sm sm:text-center text-slate-200">
        © 2024{" "}
        <Link to="/" className="hover:text-primary-800">
          Wellness Hub&trade;
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-200 sm:mt-0">
        <li>
          <Link to="/about" className="hover:text-primary-800 me-4 md:me-6">
            About
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="hover:text-primary-800 me-4 md:me-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:text-primary-800 me-4 md:me-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-primary-800">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;