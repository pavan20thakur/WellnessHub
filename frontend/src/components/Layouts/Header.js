import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const inactiveNavLink =
    "block py-2 px-3 rounded text-slate-800 hover:text-white md:p-0 text-white hover:text-primary-800";
  const activeNavLink =
    "block py-2 px-3 rounded text-white hover:text-slate-800 md:p-0 text-primary-800 hover:text-white";

  return (
    <nav className="bg-primary-800 border-b border-gray-600 bg-gray-900 text-white p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse  text-slate-200"
        >
          <img src="" className="h-14" alt="Wellness Hub" />
          <Typography>WELLNESS HUB</Typography>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 text-slate-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <ul className="flex flex-col font-medium p-0 border-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                aria-current="page"
              >
                Home
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                aria-current="page"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                aria-current="page"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                aria-current="page"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;