import React, { useState } from "react";
import faqsJsonData from "../utils/help.json";

const Section = ({ title, description, isVisible, onClick }) => {
  return (
    <div className="border border-separate p-2 m-2">
      <h3 className="font-serif font-bold">{title}</h3>
      <button onClick={onClick} className="cursor-pointer underline text-sm">
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <p className="font-serif mt-2 text-gray-700">{description}</p>
      )}
    </div>
  );
};

const Help = () => {
  const faqsData = faqsJsonData.faqs;
  const [openSectionIndex, setOpenSectionIndex] = useState(0);

  const toggleSectionVisibility = (index) => {
    if (openSectionIndex === index) {
      setOpenSectionIndex(-1);
    } else {
      setOpenSectionIndex(index);
    }
  };

  return (
    <div>
      <h1 className="text-center p-2 m-2 font-semibold">FAQs</h1>
      {faqsData.map((item, index) => (
        <div key={item.id}>
          <Section
            title={item.title}
            description={item.description}
            isVisible={openSectionIndex === index}
            onClick={() => toggleSectionVisibility(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Help;
