import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h2>This project developed by Anand G</h2>
      <p>Software developer at cognizant 🧑🏻‍💻</p>
      <ProfileFunctionalComponent name = {"Anand"}/>
      <Profile name = {"AnandClass"}/>
    </div>
  );
};

export default About;
