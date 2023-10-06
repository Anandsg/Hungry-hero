import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scrollTop-btn cursor-pointer fixed bottom-5 right-5 z-[5] w-fit p-2 bg-[#FF6600] rounded-full ${
        isVisible ? "visible" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FiArrowUp color="white" fontSize="24px" />
    </div>
  );
};

export default ScrollToTop;
