import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "./ScrollToTop";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track whether the menu is open

  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <ScrollToTop/>
    <div className="shadow-md">
      <div className="container mx-auto py-1 px-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              data-testid="logo"
              className="h-12 md:h-20"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
          {/* <span className="ml-2 text-xl font-bold">
            <span className="text-orange-500">Browse</span> Order{" "}
            <span className="text-orange-500">Enjoy!</span>
          </span> */}

          <div className="flex md:space-x-6 mt-4 md:mt-0">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              {!isMenuOpen && (
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden md:flex space-x-4">
          <Link to="/">
            <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
              About
            </li>
          </Link>
          <Link to="/Contact">
            <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
              Contact
            </li>
          </Link>
          <Link to="/Help">
            <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
              Help
            </li>
          </Link>
          <Link
            to="/Cart"
            className="flex items-center hover:text-orange-400 transition-all duration-300 ease-in-out"
          >
            <div className="relative">
              <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
              <span
                className="absolute top-[-20%] right-[-32%] inline-flex items-center justify-center w-3 h-3.5 bg-orange-500 text-white rounded-full text-xs"
                data-testid="cart"
              >
                {cartItems.length}
              </span>
            </div>
          </Link>
        </ul>

        {/* Menu for Small Screens */}
        {isMenuOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-10">
            <div className="w-full h-full p-4 flex flex-col items-center">
              <button
                onClick={toggleMenu}
                className="md:hidden focus:outline-none absolute top-4 right-4"
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>
              <ul className="flex flex-col space-y-4 items-center">
                <Link to="/" onClick={closeMenu}>
                  <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
                    Home
                  </li>
                </Link>
                <Link to="/About" onClick={closeMenu}>
                  <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
                    About
                  </li>
                </Link>
                <Link to="/Contact" onClick={closeMenu}>
                  <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
                    Contact
                  </li>
                </Link>
                <Link to="/Help" onClick={closeMenu}>
                  <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
                    Help
                  </li>
                </Link>
                <Link to="/Cart" onClick={closeMenu}>
                  <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out">
                    Cart
                  </li>
                </Link>
              </ul>

              <div className="mt-8">
                {isLoggedIn ? (
                  <button
                    className="text-lg font-medium shadow-md px-4 py-2 outline-none m-2 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                    onClick={() => setisLoggedIn(false)}
                  >
                    Login ⇦
                  </button>
                ) : (
                  <button
                    className="text-lg font-medium shadow-md px-4 py-2 outline-none m-2 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                    onClick={() => setisLoggedIn(true)}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Header;
