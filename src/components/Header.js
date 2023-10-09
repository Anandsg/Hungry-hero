import React, { useState, useContext, useEffect } from "react";
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
  faMoon, // Import the moon icon for dark mode
  faSun,  // Import the sun icon for light mode
} from "@fortawesome/free-solid-svg-icons";
import { HiPhone } from "react-icons/hi";
import { HiHome, HiBuildingOffice, HiShoppingBag } from "react-icons/hi2";
import { FaQuestionCircle } from "react-icons/fa";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";

import ScrollToTop from "./ScrollToTop";
import { useGoogleLogin } from "@react-oauth/google";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track whether the menu is open
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode

  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  //Function to get userInfo
  const getUserInfo = async (access_token) => {
    const url = "https://www.googleapis.com/oauth2/v3/userinfo";
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  };

   // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle the dark mode state

    // Apply dark mode styles based on the isDarkMode state
    const body = document.body;
    if (!isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    // Initialize dark mode styles based on the initial isDarkMode state
    const body = document.body;
    if (isDarkMode) { // Only add "dark-mode" class when isDarkMode is true
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  //Funtion to login with google account
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getUserInfo(tokenResponse.access_token);
      setisLoggedIn(false);
      localStorage.setItem("accessToken", tokenResponse.access_token);
    },
  });
  //Funtion to logOut
  const logout = () => {
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken");
      setisLoggedIn(true);
    } else {
      setisLoggedIn(true);
    }
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  //For retrieving the accessToken on page referesh
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getUserInfo(localStorage.getItem("accessToken"));
      setisLoggedIn(false);
    }
  }, []);
  return (
    <>
      <ScrollToTop />
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
          <ul className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle Button with Icon */}
      <button
        className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <>
            <FontAwesomeIcon icon={faSun} className="mr-2" />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} className="mr-2" />
          </>
        )}
      </button>
            <Link to="/">
              <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                <span>
                  <HiHome />
                </span>
                Home
              </li>
            </Link>
            <Link to="/About">
              <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                <span>
                  <HiBuildingOffice />
                </span>
                About
              </li>
            </Link>
            <Link to="/Contact">
              <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                <span>
                  <HiPhone />
                </span>
                Contact
              </li>
            </Link>
            <Link to="/Help">
              <li className="hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                <span>
                  <FaQuestionCircle />
                </span>
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

            {/* Will enable login feature once i setup google client ID */}

            {isLoggedIn ? (
              <button
                className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer md:bg-white md:text-black"
                onClick={() => {
                  login();
                }}
              >
                Login ⇦
              </button>
            ) : (
              <button
                className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </button>
            )}
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
                <ul className="flex flex-col space-y-4">
                  <Link to="/" onClick={closeMenu}>
                    <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                      <span>
                        <HiHome />
                      </span>
                      Home
                    </li>
                  </Link>
                  <Link to="/About" onClick={closeMenu}>
                    <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                      <span>
                        <HiBuildingOffice />
                      </span>
                      About
                    </li>
                  </Link>
                  <Link to="/Contact" onClick={closeMenu}>
                    <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                      <span>
                        <HiPhone />
                      </span>
                      Contact
                    </li>
                  </Link>
                  <Link to="/Help" onClick={closeMenu}>
                    <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                      <span>
                        <FaQuestionCircle />
                      </span>
                      Help
                    </li>
                  </Link>
                  <Link to="/Cart" onClick={closeMenu}>
                    <li className="text-2xl text-gray-800 hover:text-orange-400 transition-all font-serif duration-300 ease-in-out flex items-center gap-2">
                      <span>
                        <HiShoppingBag />
                      </span>
                      Cart
                    </li>
                  </Link>

                  {isLoggedIn ? (
                    <button
                      className="w-24 text-lg font-medium shadow-md py-2 outline-none m-2 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                      onClick={() => {
                        login();
                      }}
                    >
                      Login ⇦
                    </button>
                  ) : (
                    <button
                      className="w-24 text-lg font-medium shadow-md py-2 outline-none m-2 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
