import React from "react";
import aboutus from "../assets/About.jpeg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-[1320px] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col lg:flex-row my-16">
      <div className="lg:w-[40%] bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-600 font-semibold font-serif text-2xl">
          About Our Platform
        </p>
        <p className="font-serif text-base mb-4 my-9 text-gray-500">
          Our platform is dedicated to providing the best food delivery experience.
          We're passionate about delivering your favorite restaurant meals right
          to your doorstep. Our team of Frontend Developers is committed to creating
          a top-notch online food delivery platform that combines artistic creativity
          with technical excellence.
        </p>
        <p className="font-serif text-base mb-4 my-9 text-gray-500">
          We believe in the power of open-source collaboration. Our app is open for
          contributions from developers like you. You can contribute in any way,
          whether it's improving code, suggesting features, or helping us enhance
          the user experience. Join us in making our platform even better!
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/ourplatform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/ourplatform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-700"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
