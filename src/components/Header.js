import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  // const isOnline = useOnline();
  return (
    <div className="flex items-center justify-between bg-gradient-to-r px-4 shadow-md ">
      <div>
        <img className="h-28" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex py-9">
          <Link to="/">
            {" "}
            <li className="px-4">Home</li>
          </Link>
          <Link to="/About">
            <li className="px-4">About</li>
          </Link>
          <Link to="/Contact">
            <li className="px-4">Contact</li>
          </Link>
          <Link to="/Instamart">
            <li className="px-4"> Instamart</li>
          </Link>
          <Link to="/Help">
            <li className="px-4"> Help</li>
          </Link>
          <li className="nav-logo">
            <div className="nav-logo">&#128722;</div>
          </li>
        </ul>
      </div>
      {/* <h3>{isOnline? "✅" : "⛔️"}</h3> */}
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
