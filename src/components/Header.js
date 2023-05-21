import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r px-4 shadow-md ">
      <div>
        <img className="h-28" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex py-9">
          <Link to="/">
            {" "}
            <li className="hover:text-orange-400 transition-all duration-300 ease-in-out px-4">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="hover:text-orange-400 transition-all duration-300 ease-in-out px-4">
              About
            </li>
          </Link>
          <Link to="/Contact">
            <li className="hover:text-orange-400 transition-all duration-300 ease-in-out px-4">
              Contact
            </li>
          </Link>
          <Link to="/Instamart">
            <li className="hover:text-orange-400 transition-all duration-300 ease-in-out px-4">
              {" "}
              Instamart
            </li>
          </Link>
          <Link to="/Help">
            <li className="hover:text-orange-400 transition-all duration-300 ease-in-out px-4">
              {" "}
              Help
            </li>
          </Link>
          <Link
            to="/Cart"
            className="flex items-center hover:text-orange-400 transition-all duration-300 ease-in-out px-4"
          >
            <div className="relative">
              <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
              <span className="absolute top-[-20%] right-[-32%] inline-flex items-center justify-center w-3 h-3.5 bg-orange-500 text-white rounded-full text-xs">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </ul>
      </div>
      {/* <h3>{isOnline ? "🟢" : "🔴"}</h3> */}
      <span className="font-serif text-yellow-600">{user.name}</span>
      {isLoggedIn ? (
        <button
          className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
          onClick={() => setisLoggedIn(false)}
        >
          Login ⇦
        </button>
      ) : (
        <button
          className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
          onClick={() => setisLoggedIn(true)}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
