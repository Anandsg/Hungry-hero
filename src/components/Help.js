import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsJsonData from "../utils/help.json";

const Section = ({ title, description, isVisible, onClick }) => {
  return (
    <Accordion
      expanded={isVisible}
      onChange={onClick}
      style={{
        borderRadius: "1rem",
        transition: "ease-in-out .13s",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
      }}
      className="border rounded-2xl m-4 overflow-hidden transition-all transform hover:scale-105  duration-300 ease-in"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="bg-blue-200 transition-all rounded-t-2xl"
      >
        <Typography
          variant="h6"
          style={{ fontSize: "1.25rem", fontWeight: "500" }}
          className="text-gray-800 hover:text-orange-400"
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const Help = () => {
  const faqsData = faqsJsonData.faqs;
  const [openSectionIndex, setOpenSectionIndex] = useState(-1);

  const toggleSectionVisibility = (index) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="container mx-auto p-8">
      <Typography
        variant="h4"
        align="center"
        className="text-gray-900"
        style={{
          fontWeight: "600",
          fontSize: "2.5rem",
        }}
      >
        FAQs
      </Typography>
      {faqsData.map((item, index) => (
        <Section
          key={item.id}
          title={item.title}
          description={item.description}
          isVisible={openSectionIndex === index}
          onClick={() => toggleSectionVisibility(index)}
        />
      ))}
    </div>
  );
};

export default Help;
