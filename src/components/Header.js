import React from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Items</li>
          <li>Contact</li>
          <li className="nav-logo">
            <div className="nav-logo">&#128722;</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
