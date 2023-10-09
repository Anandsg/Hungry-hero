import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import cook from "../assets/Cook.jpg";
import React from "react";
import { Delete } from "@mui/icons-material";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cart items");
  const dispatch = useDispatch();
  function HandleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="md:w-3/5 w-[80%]  m-auto py-4 min-h-screen ">
      {cartItems.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Cart - {cartItems.length}</h1>
            <button
              className="text-xs font-medium bg-orange-300 py-1 px-2 hover:bg-orange-200 transition-all duration-300 ease-in-out rounded"
              onClick={() => HandleClearCart()}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex flex-col ">
            {cartItems.map((item) => {
              return (
                <CartItem key={item?.info?.id} {...item?.info} />
              );
            })}
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
const CartItem = ({ id, name, imageId, price, description, quantity }) => {
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
    <div className="my-2 border-b py-2 md:flex-row flex flex-col text-sm  gap-8 relative">
      
      <img
        src={
          imageId
            ? CDN_URL + imageId
            : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
        }
        alt=""
        className="w-32 h-20 rounded object-cover"
      />
      <div className="flex flex-col ">
        <span className="font-semibold">{name}</span>
        <span className="font-semibold">
          &#8377;
          {!price ? "250" : Math.round(((price / 100) * quantity)*100)/100}
        </span>
        <span className="text-sm text-gray-500">{description}</span>
        <div className="flex  items-center gap-2">
          <button
            id="decreaseQuantity"
            className="px-4 py-1 bg-red-200 hover:bg-gray-100 rounded focus:outline-none"
            onClick={() => HandleQuantityDecrease()}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            id="increaseQuantity"
            className=" px-4 py-1 bg-green-200 hover:bg-gray-100 rounded focus:outline-none"
            onClick={() => HandleQuantityIncrease()}
          >
            +
          </button>
          <button
        className="float-right flex-start px-2 py-1  hover:bg-gray-200 rounded-full focus:outline-none"
        onClick={() => HandleRemoveItem()}
      >
        <Delete style={{color: "red"}}/>
      </button>
        </div>
      </div>
    </div>
  );
};
const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <img src={cook} style={{height: "60%"}}/>
      <h1 className="text-black text-1xl" style={{fontWeight: "700"}}>Your Cart Is Empty</h1>
      <h1 className="text-black text-1xl" style={{fontWeight: "500"}}>Go to home page for more restaurants</h1>
      <Link to="/" className="mt-4">
        {" "}
        <button className="bg-white hover:bg-orange-300 text-gray-800 font-semibold py-2 px-4 border border-orange-300 rounded shadow">
          See Restaurants Near You
        </button>
      </Link>
    </div>
  );
};
export default Cart;