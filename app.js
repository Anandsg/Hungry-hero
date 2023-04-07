import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
  return (
    <div className="header">
      <div>
        <img className="logo"
        src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"/>
      </div> 
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component
root.render(< AppLayout />)
