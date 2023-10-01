import React, { useState } from "react";
import faqsJsonData from "../utils/help.json";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-separate p-2 m-2">
      <h3 className="font-serif font-bold">{title}</h3>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="cursor-pointer underline text-sm"
      >
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
  const initialVisibleSections = [];
  for (let index = 0; index < faqsData.length; index++) {
    initialVisibleSections.push(index === 0);
  }
  const [visibleSections, setVisibleSections] = useState(
    initialVisibleSections
  );

  const toggleSectionVisibility = (index) => {
    const newVisibleSections = [...visibleSections];
    newVisibleSections[index] = !newVisibleSections[index];
    setVisibleSections(newVisibleSections);
  };

  return (
    <div>
      <h1 className="text-center p-2 m-2 font-semibold">FAQs</h1>
      {faqsJsonData.faqs.map((item, index) => (
        <div key={item.id}>
          <Section
            title={item.title}
            description={item.description}
            isVisible={visibleSections[index]}
            setIsVisible={() => toggleSectionVisibility(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Help;
