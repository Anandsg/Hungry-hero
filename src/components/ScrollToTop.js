import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);

      if (scrolled > 100) {
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
      className="fixed bottom-5 right-5 z-50"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="w-10 h-10 rounded-full relative cursor-pointer">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(#03cc65 ${scrollProgress}%, #ff7738 ${scrollProgress}%)`,
          }}
        ></div>
        <FiArrowUp
          color="white"
          fontSize="24px"
          className="absolute inset-0 m-auto"
        />
      </div>
    </div>
  );
};

export default ScrollToTop;
