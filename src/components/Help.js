import React, { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>
      <button
        onClick={() => setIsVisible(true)}
        className="cursor-pointer underline text-sm"
      >
        Show
      </button>
      {isVisible && <p className="font-serif">{description}</p>}
    </div>
  );
};

const Help = () => {
  return (
    <div>
      <h1 className="p-2 m-2 font-serif font-bold">Can I edit my order? </h1>
      <Section
        title={""}
        description={
          "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
        }
      />
      <h1 className="p-2 m-2 font-serif font-bold">
        I want to cancel my order
      </h1>
      <Section
        title={""}
        description={
          "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number: 080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed."
        }
      />
    </div>
  );
};

export default Help;
