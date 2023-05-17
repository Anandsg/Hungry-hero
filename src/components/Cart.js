import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice"; 

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const HandleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h3 className="font-bold flex">Cart Items {cartItems.length}</h3>
      <button className="bg-red-400 p-2 m-4" onClick={() => HandleClearCart()}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
