import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import GitLogo from "../assets/github-logo.png"
import "../utils/index.css";

const Footer = () => {
  return (
     <footer class="bg-slate-600 relative text-center text-white lg:text-left pb-0">
      <div class="mx-6 py-10 text-center  content-around md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start ">
              <img
                data-testid="logo"
                className="h-8 w-8"
                src={Logo}
                alt="Logo"
              />
              Hungry Hero
            </h6>
            <p>
              Your Foodie's Paradise! Explore a World of Flavors, Delivered
              Right to Your Doorstep!
            </p>
          </div>

          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start underline decoration-orange-500 decoration-1">
              Useful links
            </h6>
            <p class="mb-4">
              <Link to="/about" class="text-neutral-50">
                About
              </Link>
            </p>
            <p class="mb-4">
              <Link to="/contact" class="text-neutral-50">
                Contact
              </Link>
            </p>
            <p class="mb-4">
              <Link to="/help" class="text-neutral-50">
                Help
              </Link>
            </p>
            <p>
              <Link to="/cart" class="text-neutral-50">
                Cart
              </Link>
            </p>
          </div>

          <div>
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start underline decoration-orange-500 decoration-1">
            Get in Touch
            </h6>
            <div class="mb-4 flex items-center justify-center md:justify-start">
              <a
                href="https://peerlist.io/anandsg"
                target="_blank"
                title="Anand's Peerlist profile"
                class="flex items-center text-decoration-none"
              >
                <img
                  src="https://ph-files.imgix.net/f744417c-2992-4645-93c3-6a5c8ab8c2b6.png?auto=format"
                  alt="Peerlist"
                  class="peerlist-logo"
                />
                <span class="ml-2">anandsg</span>
              </a>
            </div>
            <div class="mb-4 flex items-center justify-center md:justify-start">
              <a
                href="https://github.com/Anandsg"
                target="_blank"
                title="Anand's Github profile"
                class="flex items-center text-decoration-none"
              >
                <img
                  src={GitLogo}
                  alt="GitHub"
                  className="github-logo h-7 w-7"
                />
                <span class="ml-2">Anandsg</span>
              </a>
            </div>

            <div class="mb-4 flex items-center justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/anand-gadagin-6a8a96184/"
                target="_blank"
                title="Anand's Linkedin profile"
                class="flex items-center text-decoration-none"
              >
                <img
                  src={"https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"}
                  alt="Linkedin"
                  className="h-7 w-7"
                />
                <span class="ml-2">Anand Gadagin</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-neutral-200 p-3 text-center dark:bg-neutral-700">
        <span className="text-neutral-600">
          © Copyright {new Date().getFullYear()}{" "}
        </span>
        <span class="font-semibold text-neutral-600 dark:text-neutral-400 mx-1">
          Developed with 🧡 and a lot of ☕️ by Anand
        </span>
      </div>
    </footer>
  );
};

export default Footer;
