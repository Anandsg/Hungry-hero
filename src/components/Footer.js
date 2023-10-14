import React from "react";
import "../utils/index.css";

const Footer = () => {
  return (
    <div className="footer break-words relative flex w-full justify-center items-center">
      <div className="grid grid-rows-2">
        <div className="text-center">
          Developed with 🧡 and a lot of ☕️ by Anand
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="flex w-full justify-center items-center gap-4">
          <a
            href="https://github.com/Anandsg"
            target="_blank"
            title="Anand's Github profile"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="github-logo mx-3"
            />
          </a>
          <a
            href="https://peerlist.io/anandsg"
            target="_blank"
            title="Anand's Peerlist profile"
          >
            <img
              src="https://ph-files.imgix.net/f744417c-2992-4645-93c3-6a5c8ab8c2b6.png?auto=format"
              alt="Peerlist"
              className="peerlist-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
