import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import cook from "../assets/Cook.jpg";
import React from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrdarSummery";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cart items");
  const dispatch = useDispatch();
  function HandleClearCart() {
    dispatch(clearCart());
  }

  return (
    <>
      {cartItems.length > 0 ? (
        <div
          className="m-auto mx-4 py-4 flex md:h-[100vh]"
          style={{ position: "relative" }}
        >
          <div className="flex flex-col md:grid grid-cols-5 gap-x-4 gap-y-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col md:col-span-3 w-full md:overflow-y-scroll md:pr-2">
              <div className="flex justify-between items-center mb-4 border-b-[1px] border-black/10 pb-2">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Cart - {cartItems.length} Items
                </h1>
                <button
                  className="text-xs text-white font-medium bg-orange-400 py-1 px-2 hover:bg-orange-300 transition-all duration-300 ease-in-out rounded "
                  onClick={() => HandleClearCart()}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex flex-col">
                {cartItems.map((item) => (
                  <CartItem key={item?.info?.id} {...item.info} />
                ))}
              </div>
            </div>
            <div className=" col-span-2">
              <OrderSummary />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <img
        src={cook}
        style={{
          height: "60%",
          position: "relative",
          top: ".4rem",
          margin: "1rem 0",
        }}
      />
      <h1 className="text-black text-1xl" style={{ fontWeight: "700" }}>
        Your Cart Is Empty
      </h1>
      <h1 className="text-black text-1xl" style={{ fontWeight: "500" }}>
        Go to home page for more restaurants
      </h1>
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
