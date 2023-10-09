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
import React, { useEffect, useState } from "react";
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
        <div className="md:w-3/5 w-[90%] m-auto py-4 min-h-screen flex " style={{ position: 'relative', right: '4rem', width: '70vw' }}>
          <>
            <div className="flex flex-col w-2/3 pr-4">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Cart - {cartItems.length} Items</h1>
                <button
                  className="text-xs text-white font-medium bg-orange-400 py-1 px-2 hover:bg-orange-300 transition-all duration-300 ease-in-out rounded"
                  onClick={() => HandleClearCart()}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex flex-col">
                {cartItems.map((item) => (
                  <CartItem key={item?.info?.id} {...item?.info} />
                ))}
              </div>
            </div>
            <OrderSummary />
          </>
        </div>
      ) : (
        <EmptyCart />

      )}
    </>
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
    <div className="my-2 border-b py-2 md:flex-row flex flex-col text-sm  gap-8 relative" style={{ height: '50%' }} >
      <button
        className="absolute bottom-1 border-2 border-orange-400 right-0 mt-2 mr-2 px-2 py-1 hover:bg-gray-200 bg-transparent rounded-full focus:outline-none text-orange-400 rounded-3xl" style={{ borderRadius: '7px' }}
        onClick={() => HandleRemoveItem()}
      >
        Remove
      </button>

      <img
        src={
          imageId
            ? CDN_URL + imageId
            : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
        }
        alt=""
        className="w-32 h-30 rounded object-cover"
      />
      <div className="flex flex-col gap-1 ">
        <span className="font-semibold">{name}</span>
        <span className="font-semibold">
          &#8377;
          {!price ? "250" : Math.round(((price / 100) * quantity) * 100) / 100}{" "}<span className="text-xs text-gray-500">{`(${(price / 100)} x ${quantity})`}</span>
        </span>
        <span className="text-sm text-gray-500">{description}</span>
        <div className="flex items-center space-x-2">
          <button
            id="decreaseQuantity"
            className="px-2 text-white py-1 font-bold  bg-orange-400 hover:bg-orange-300 rounded-full focus:outline-none"
            onClick={() => HandleQuantityDecrease()}
            style={{ borderRadius: "7px",width:'2rem' }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            id="increaseQuantity"
            className="px-2 py-1  font-bold text-white bg-orange-400 hover:bg-orange-300  rounded-full focus:outline-none"
            onClick={() => HandleQuantityIncrease()}
            style={{ borderRadius: "7px",width:'2rem' }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
const OrderSummary = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    let totalCartAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalCartAmount += Math.round((cartItems[i].info.price / 100) * cartItems[i].info.quantity * 100) / 100;
    }

    setTotalAmount(totalCartAmount);
    setDeliveryCharge((5 / 100) * totalCartAmount);
    setDiscount((10 / 100) * totalCartAmount);
  }, [cartItems]);

  return (
    <div className="w-1/3 ml-4 relative" style={{ left: '3rem' }}>
      <div className="bg-white p-4 rounded-md shadow-md" style={{ height: '50vh', width: '26vw' }}>
        <div className="text-2xl mt-2 font-semibold mb-4">Order Summary</div>
        <hr />
        <div className="flex  mt-3 justify-between items-center mb-2">
          <div className="text-sm font-medium">Price ({cartItems.length} items)</div>
          <div>&#8377;{" "}<span className="font-bold">{totalAmount.toFixed(2)}</span></div>
        </div>
        <div className="flex mt-3 justify-between items-center ">
          <div className="text-sm font-medium">Discount (10%)</div>
          <div>- &#8377;{" "}<span className="font-bold">{discount.toFixed(2)}</span></div>
        </div>
        <div className="flex mt-3 justify-between items-center">
          <div className="text-sm font-medium">Delivery Charge (5%)</div>
          <div>- &#8377;{" "}<span className="font-bold">{deliveryCharge.toFixed(2)}</span></div>
        </div>
        <p className="text-sm text-gray-500 mt-3">You will save {`${discount.toFixed(2)} on this order`} 🎉</p>
        <hr />
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm font-medium">Total Amount</div>
          <div>&#8377;{" "}<span className="font-bold text-orange-400 mt-3">{(totalAmount - deliveryCharge - discount).toFixed(2)}</span></div>
        </div>
        <button className="bg-orange-400 text-white py-2 px-4 rounded mt-6 w-full">Place Order</button>
      </div>
    </div>
  );
};



const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <img src={cook} style={{ height: "60%",position:'relative',top:'.4rem' ,margin:'1rem 0'}} />
      <h1 className="text-black text-1xl" style={{ fontWeight: "700" }}>Your Cart Is Empty</h1>
      <h1 className="text-black text-1xl" style={{ fontWeight: "500" }}>Go to home page for more restaurants</h1>
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