import React from "react";
import { useState } from "react";

const Profile = (props) => {
  // creating a state
  const [count, setcount] = useState(0);
  return (
    <div>
      <h3>This is my profile component</h3>
      <h3>Name : {props.name}</h3>
      <h3>count : {count}</h3>
      <button onClick={() => setcount(1)}>Count</button>
    </div>
  );
};

export default Profile;
