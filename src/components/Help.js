import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-separate p-2 m-2">
      <h3 className="font-serif font-bold">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline text-sm"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline text-sm"
        >
          Show
        </button>
      )}
      {isVisible && (
        <p className="font-serif mt-2 text-gray-700">{description}</p>
      )}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setIsVisibleSection] = useState("edit");
  return (
    <div>
      <h1 className="text-center p-2 m-2 font-semibold">FAQs</h1>
      <Section
        title={"Can I edit my order? "}
        description={
          "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
        }
        isVisible={visibleSection === "edit"}
        setIsVisible={() => setIsVisibleSection("edit")}
      />
      <Section
        title={"I want to cancel my order"}
        description={
          "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number: 080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed."
        }
        isVisible={visibleSection === "cancel"}
        setIsVisible={() => setIsVisibleSection("cancel")}
      />
      <Section
        title={"Is single order from many restaurants possible?"}
        description={
          "We currently do not support this functionality. However, you can place orders for individual items from different restaurants."
        }
        isVisible={visibleSection === "order"}
        setIsVisible={() => setIsVisibleSection("order")}
      />
      <Section
        title={"How long do you take to deliver?"}
        description={
          "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant."
        }
        isVisible={visibleSection === "long"}
        setIsVisible={() => setIsVisibleSection("long")}
      />

      <Section
        title={"Can I order from any location?"}
        description={
          "We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location."
        }
        isVisible={visibleSection === "location"}
        setIsVisible={() => setIsVisibleSection("location")}
      />
    </div>
  );
};

export default Help;
