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
          <li>Items</li>
          <li>Contact</li>
          <li className="nav-logo">
            <div className="nav-logo">&#128722;</div>
            {/* </li> </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestruarantCards = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img className="res-image" alt="res-image" src={props.resImage} />
      <div className="res-details">
       
        <h4 className="res-name">{props.resName}</h4>
        <div className="res-rating">
          <i className="fa fa-star"></i>
          <span>{props.resRating}</span>
        </div>
        <div className="res-cuisine">
          {props.resCuisine} - {props.deliveryTime} min
        </div>
        <div className="res-price">
          <span>{props.resPrice}</span>
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
        <RestruarantCards
          resName="Hotel Empire"
          resCuisine="Snacks, fast food, Beverages"
          resPrice="₹ 800 for two"
          resRating="4.5 ★"
          resImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d06b7fa84cb8f8193f60d4c2de172347"
          deliveryTime="23"
        />
        <RestruarantCards
          resName="Sunny's chicken wings!"
          resCuisine="American, Fast food"
          resPrice="₹ 1200 for two"
          resRating="4.3 ★"
          resImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/5ba4ead0cbe4e39a9ed6beda5b94e5f6"
          deliveryTime="46"
        />
        <RestruarantCards
          resName="Wow! Momo"
          resCuisine="Tibetan, Healthy food, Asian"
          resPrice="₹ 540 for two"
          resRating="4.1 ★"
          resImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/b5mmszz2vfpdwegpaw5z"
          deliveryTime="17"
        />
        <RestruarantCards
          resName="Shri udupi Hotel"
          resCuisine="South indian, snacks"
          resPrice="₹ 170 for two"
          resRating="3.9 ★"
          resImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jxp8y1chnqljwqylpkov"
          deliveryTime="32"
        />
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
