import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

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
            <li className="hover:text-orange-400 transition-all duration-300 ease-in-out px-8">
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
          <Link to="/Cart">
            <li className="hover:text-orange-400 transition-all duration-300 ease-in-out px-4">
              {" "}
              Cart {cartItems.length}
            </li>
          </Link>
        </ul>
      </div>
      <h3>{isOnline ? "🟢" : "🔴"}</h3>
      <span className="font-serif text-yellow-600">{user.name}</span>
      {isLoggedIn ? (
        <button className="px-4" onClick={() => setisLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
