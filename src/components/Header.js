import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  // const isOnline = useOnline();
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <li>Items</li>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/Instamart">
            <li>Instamart</li>
          </Link>
          <li className="nav-logo">
            <div className="nav-logo">&#128722;</div>
          </li>
        </ul>
      </div>
      {/* <h3>{isOnline? "✅" : "⛔️"}</h3> */}
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
