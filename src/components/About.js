import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor"); // 1st this will be called
  }
  componentDidMount() {
    console.log("parent componentDidMoun"); // 6th this will be called
  }

  render() {
    console.log("parent render"); // 2nd this will be called
    return (
      <div>
        <h2>This project developed by Anand G</h2>
        <p>Software developer at cognizant 🧑🏻‍💻</p>
        <ProfileFunctionalComponent name={"Anand"} />
        <Profile name={"AnandClass"} />
      </div>
    );
  }
}

export default About;
