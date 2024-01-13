import React, { useState, useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { HiPhone } from "react-icons/hi";
import { HiHome, HiBuildingOffice, HiShoppingBag } from "react-icons/hi2";
import { FaQuestionCircle } from "react-icons/fa";

import ScrollToTop from "./ScrollToTop";
import { useGoogleLogin } from "@react-oauth/google";
import avatar from "../assets/avatar.png";
import mobile_menu from "../assets/mobile-menu.svg";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track whether the menu is open
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    picture: "",
    email: "",
  });

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
      const { name, email, picture } = data;
      setUserInfo({
        name: name,
        email: email,
        picture: picture,
      });
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  };

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
      <div className="shadow-md fixed bg-white w-full z-50 sm:pr-4">
        <div className="flex justify-between container mx-auto py-1 px-4 md:flex md:justify-between md:items-center">
          <div className="flex items-center -ml-5 sm:ml-0 justify-between">
            <Link to="/">
              <img
                data-testid="logo"
                className="h-12 md:h-20"
                src={LOGO_URL}
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="flex text-[10px] sm:text-[16px] font-semibold md:font-normal items-center space-x-2 sm:space-x-3 md:space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out hidden md:flex items-center gap-2">
                <span className="hidden md:block">
                  <HiHome />
                </span>
                Home
              </li>
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out hidden md:flex items-center gap-2">
                <span className="hidden md:block">
                  <HiBuildingOffice />
                </span>
                About
              </li>
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out hidden md:flex items-center gap-2">
                <span className="hidden md:block">
                  <HiPhone />
                </span>
                Contact
              </li>
            </NavLink>
            <NavLink
              to="/Help"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out hidden md:flex items-center gap-2">
                <span className="hidden md:block">
                  <FaQuestionCircle />
                </span>
                Help
              </li>
            </NavLink>
            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <div className="relative flex items-center hover:text-orange-400 transition-all duration-300 ease-in-out sm:mr-4">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span
                  className="absolute top-[-50%] right-[-20%] sm:top-[-20%] sm:right-[-32%] inline-flex items-center justify-center w-3 h-3.5 bg-orange-500 text-white rounded-full text-xs"
                  data-testid="cart"
                >
                  {cartItems.length}
                </span>
              </div>
            </NavLink>
            {isLoggedIn ? (
              <button
                className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                onClick={() => {
                  login();
                }}
              >
                Login
              </button>
            ) : (
              <>
                <button
                  className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                  onClick={() => logout()}
                >
                  Logout
                </button>
                <button
                  className="outline-none m-2 right-10 transition-all duration-200 ease-in-out cursor-pointer"
                  onClick={() => {
                    setisProfileOpen(!isProfileOpen);
                  }}
                >
                  <img
                    src={userInfo.picture ? userInfo.picture : avatar}
                    alt="pic"
                    className="w-9 h-9 right-10 rounded-full"
                  />
                </button>
              </>
            )}
            <button onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
              className="md:hidden">
              <div className="navbar-burger flex items-center text-orange-600 p-3">
                <img src={mobile_menu} className="block h-4 w-4 fill-current" />
              </div>
            </button>
          </ul>

        </div>
      </div>
      {isProfileOpen && !isLoggedIn ? (
        <div className="flex items-center justify-center fixed h-full right-5 sm:right-20 z-20">
          <div className="w-50 h-2/3 bg-white p-10 rounded shadow-lg flex flex-col justify-evenly ">
            <div className="flex items-center justify-center w-full">
              <img
                src={userInfo.picture ? userInfo.picture : avatar}
                alt="pic"
                className="w-1/2 h-100 rounded-full"
              />
            </div>
            <hr />
            <div className="text-0.5rem font-semibold justify-start my-5" v>
              Name: {userInfo.name}
            </div>
            <hr />
            <div className="text-0.5rem font-semibold justify-start my-5">
              Email: {userInfo.email}
            </div>
            <div
              className="text-blue-500 text-0.5rem justify-start my-5"
              onClick={() => {
                logout();
                login();
              }}
            >
              switch account
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {isMenuOpen ? (
        <div className="fixed top-0 left-0 z-20">
          <div class="shadow-xl w-72 py-14 bg-white h-screen">
            <ul className="flex-col text-[16px] px-4 py-8 sm:text-[16px] font-semibold md:font-normal items-center space-x-2 sm:space-x-3 md:space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 " : "text-black"
                }
              >
                <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2">
                  <span className="hidden md:block">
                    <HiHome />
                  </span>
                  Home
                </li>
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 " : "text-black"
                }
              >
                <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2">
                  <span className="hidden md:block">
                    <HiBuildingOffice />
                  </span>
                  About
                </li>
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 " : "text-black"
                }
              >
                <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2">
                  <span className="hidden md:block">
                    <HiPhone />
                  </span>
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      ) : (<> </>)

      }
    </>
  );
};

export default Header;
