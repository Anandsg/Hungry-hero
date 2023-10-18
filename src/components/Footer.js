import React from "react";
import Logo from "../assets/logo.png";
import "../utils/index.css";

const Footer = () => {
  return (
    // <div className="footer relative flex flex-col sm:flex-row gap-x-3 w-full justify-center items-center">
    //   Developed with 🧡 and a lot of ☕️ by Anand
    //   <i className="fa-solid fa-heart"></i>
    //   <div class="flex flex-row gap-x-2 justify-center items-center">
    //     <a
    //       href="https://github.com/Anandsg"
    //       target="_blank"
    //       title="Anand's Github profile"
    //     >
    //       <img
    //         src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    //         alt="GitHub"
    //         className="github-logo"
    //       />
    //     </a>
    //     <a
    //       href="https://peerlist.io/anandsg"
    //       target="_blank"
    //       title="Anand's Peerlist profile"
    //     >
    //       <img
    //         src="https://ph-files.imgix.net/f744417c-2992-4645-93c3-6a5c8ab8c2b6.png?auto=format"
    //         alt="Peerlist"
    //         className="peerlist-logo"
    //       />
    //     </a>
    //   </div>
    // </div>

    <footer class="bg-slate-600 relative text-center text-white lg:text-left pb-0">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img
                data-testid="logo"
                className="h-8 w-8"
                src={Logo}
                alt="Logo"
              />
             Hungry Hero
            </h6>
            <p>
            Your Foodie's Paradise! Explore a World of Flavors, Delivered Right to Your Doorstep
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Angular
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                React
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Laravel
              </a>
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Pricing
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Settings
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Help
              </a>
            </p>
          </div>

          <div>
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              New York, NY 10012, US
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              info@example.com
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              + 01 234 567 88
            </p>
            <p class="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                  clip-rule="evenodd"
                />
              </svg>
              + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div class="bg-neutral-200 p-3 text-center dark:bg-neutral-700">
        <span>© Copyright:</span>
        <a
          class="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Hungry Hero
        </a>
      </div>
    </footer>
  );
};

export default Footer;
