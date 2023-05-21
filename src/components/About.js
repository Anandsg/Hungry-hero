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
      <div className="container mx-auto p-4 bg-gray-100">
        <h2 className="text-4xl font-bold mt-6 mb-4 text-center text-purple-800">
          About Us
        </h2>
        <p className="text-lg mb-4 text-center text-gray-800">
          This project is developed by Anand G, a software developer at Cognizant.
        </p>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <ProfileFunctionalComponent name={"Anand"} />
            <Profile name={"AnandClass"} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;


