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
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestruarantCards = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-image"
        alt={resData.data.name}
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cloudinaryImageId
        }
      />
      <div className="res-details">
        <h4 className="res-name">{resData.data.name}</h4>
        <div className="res-rating">
          <i className="fa fa-star"></i>
          <span>{resData.data.avgRating}★</span>
        </div>
        <div className="res-cuisine">
          {resData.data.cuisines.join(", ")} - {resData.data.deliveryTime} min
        </div>
        <div className="res-price">
          <span>{resData.data.costForTwo / 100} For two</span>
          <button className="res-order">Order Online</button>
        </div>
      </div>
    </div>
  );
};

const resObj = {
  type: "restaurant",
  data: {
    type: "F",
    id: "30083",
    name: "California Burrito",
    uuid: "4d87d9aa-cf3f-450b-87d2-f5d9acfaa23d",
    city: "1",
    area: "Vasanth Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "omvhhltozlarzavg9d6g",
    cuisines: ["Mexican", "Salads", "Healthy Food"],
    tags: [],
    costForTwo: 25000,
    costForTwoString: "₹250 FOR TWO",
    deliveryTime: 22,
    minDeliveryTime: 22,
    maxDeliveryTime: 22,
    slaString: "22 MINS",
    lastMileTravel: 2.799999952316284,
    slugs: {
      restaurant: "california-burrito-central-bangalore-central-bangalore",
      city: "bangalore",
    },
    cityState: "1",
    address:
      "Sigma Central Mall, 15/16/17, Cunningham Rd, Vasanth Nagar, Bengaluru, Karnataka 560052",
    locality: "Cunnigham road",
    parentId: 1252,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "20% off",
      shortDescriptionList: [
        {
          meta: "20% off | Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "20% off up to ₹50 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "20% OFF",
      shortDescriptionList: [
        {
          meta: "Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "20% off up to ₹50 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: "distance",
          fee: 2900,
          message: "",
        },
        {
          name: "time",
          fee: 0,
          message: "",
        },
        {
          name: "special",
          fee: 0,
          message: "",
        },
      ],
      totalFees: 2900,
      message: "",
      title: "Delivery Charge",
      amount: "2900",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6417091~p=7~eid=00000187-5fe8-ef28-185b-427c00aa071e",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "2.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "30083",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      lastMileTravel: 2.799999952316284,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "4.5",
    totalRatings: 10000,
    new: false,
  },
  subtype: "basic",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h3>Search</h3>
      </div>
      <div className="res-container">
        <RestruarantCards resData={resObj} />
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
