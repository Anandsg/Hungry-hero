import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const OrderSummary = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    let totalCartAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalCartAmount +=
        Math.round(
          (cartItems[i].info.price
            ? cartItems[i].info.price / 100
            : cartItems[i].info.defaultPrice / 100) *
            cartItems[i].info.quantity *
            100
        ) / 100;
    }

    setTotalAmount(totalCartAmount);
    setDeliveryCharge((5 / 100) * totalCartAmount);
    setDiscount((10 / 100) * totalCartAmount);
  }, [cartItems]);

  return (
    <div>
      <div
        className="bg-white p-4 rounded-md shadow-md"
      >
        <div className="text-xl md:text-2xl mt-2 font-semibold mb-4">Order Summary</div>
        <hr />
        <div className="flex  mt-3 justify-between items-center mb-2">
          <div className="text-sm font-medium">
            Total Price ({cartItems.length} items)
          </div>
          <div>
            &#8377; <span className="font-bold">{totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex mt-3 justify-between items-center ">
          <div className="text-sm font-medium">Discount (10%)</div>
          <div>
            - &#8377; <span className="font-bold">{discount.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex mt-3 justify-between items-center">
          <div className="text-sm font-medium">Delivery Charge (5%)</div>
          <div>
            + &#8377;{" "}
            <span className="font-bold">{deliveryCharge.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          You will save {`${discount.toFixed(2)} on this order`} 🎉
        </p>
        <hr />
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm font-medium">Total Amount</div>
          <div>
            &#8377;{" "}
            <span className="font-bold text-orange-400 mt-3">
              {(totalAmount + deliveryCharge - discount).toFixed(2)}
            </span>
          </div>
        </div>
        <button className="bg-orange-400 text-white py-2 px-4 rounded mt-6 w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
