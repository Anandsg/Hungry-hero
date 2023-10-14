import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CartItem = ({
  id,
  name,
  imageId,
  defaultPrice,
  price,
  description,
  quantity,
}) => {
  const dispatch = useDispatch();

  function HandleRemoveItem() {
    dispatch(removeItem(id));
  }

  function HandleQuantityIncrease() {
    dispatch(increaseQuantity(id));
  }

  function HandleQuantityDecrease() {
    dispatch(decreaseQuantity(id));
  }

  return (
    <div className="my-2 border-b py-2 md:flex-row text-sm gap-8 relative">
      <div className="flex items-start">
        <img
          src={
            imageId
              ? CDN_URL + imageId
              : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
          }
          alt=""
          className="w-32 h-30 rounded object-cover"
          style={{ padding: "10px" }}
        />

        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-semibold">{name}</span>
          <span className="font-semibold">
            &#8377;
            {!price
              ? Math.round((defaultPrice / 100) * quantity * 100) / 100
              : Math.round((price / 100) * quantity * 100) / 100}
            <span className="text-xs text-gray-500">
              {!price
                ? `(${defaultPrice / 100} x ${quantity})`
                : `(${price / 100} x ${quantity})`}
            </span>
          </span>
          <div>
            <span className="text-sm text-gray-500">{description}</span>
            <div className="flex flex-row-reverse justify-between md:flex-row items-center pt-4 pb-2">
              <div className="flex items-center space-x-2">
                <button
                  id="decreaseQuantity"
                  className="px-2 text-white py-1 font-bold bg-orange-400 hover:bg-orange-300 rounded-full focus:outline-none"
                  onClick={() => HandleQuantityDecrease()}
                  style={{ borderRadius: "7px", width: "2rem" }}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  id="increaseQuantity"
                  className="px-2 py-1 font-bold text-white bg-orange-400 hover:bg-orange-300 rounded-full focus:outline-none"
                  onClick={() => HandleQuantityIncrease()}
                  style={{ borderRadius: "7px", width: "2rem" }}
                >
                  +
                </button>
              </div>
              <button
                className="px-2 py-1 hover:bg-gray-200 bg-orange-400 focus:outline-none text-white rounded-3xl"
                style={{ borderRadius: "7px" }}
                onClick={() => HandleRemoveItem()}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
