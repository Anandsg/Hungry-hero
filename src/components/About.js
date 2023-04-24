import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>This project developed by Anand G</h2>
      <p>Software developer at cognizant 🧑🏻‍💻</p>
      <Outlet/>
    </div>
  );
};

export default About;
