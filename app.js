import React from "react";
import ReactDOM from "react-dom/client";

/* 
Header
  - Logo
  - Navigations(about,contact)
Body
  - Restro cards
    - food image
    - name of restuarat, ratings, cuisins etc
  - search
Footer 
  - copyright
  - links
  - adress
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"
        />
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
// const RestruarantCards = () => {
//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d06b7fa84cb8f8193f60d4c2de172347"
//       />
//         <h4 className="res-name">Hotel Emphire</h4>
//         <h5 className="res-subName">Snacks, fast food, Beverages</h5>
//         <h5 className="res-subNameStar">4.1 ★</h5>
//         <h5 className="res-price">₹ 400 FOR TWO</h5>
//       </div>
//   );
// };
const RestruarantCards = () => { 
  return (
    <div className="res-card">
      <img
        className="res-image"
        alt="res-image"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d06b7fa84cb8f8193f60d4c2de172347"
      />
      <div className="res-details">
        <h4 className="res-name">Hotel Emphire</h4>
        <div className="res-rating">
          <i className="fa fa-star"></i>
          <span>4.5 ★</span>
        </div>
        <div className="res-cuisine">Snacks, fast food, Beverages</div>
        <div className="res-price">
          <span>₹ 700 for two</span>
          <button className="res-order">Order Online</button>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h3>Search</h3>
      </div>
      <div className="res-container">
        <RestruarantCards />
        <RestruarantCards />
        <RestruarantCards />
        <RestruarantCards />
        
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component
root.render(<AppLayout />);
