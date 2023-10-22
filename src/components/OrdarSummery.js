import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";


const OrderSummary = () => {
const navigate=useNavigate()
  const fade = useSpring({
    from: { opacity: 0, marginTop: 200 },
    to: { opacity: 1, marginTop: 0 },
    delay: 200,
  });

  const textFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 400,
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const placeOrderHandler = () => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      // User is logged in, show modal
      setIsModalOpen(true);

      // Simulate a delay for demonstration purposes
      setTimeout(() => {
        // Redirect to the home page or perform other actions
        // For now, just close the modal
        setIsModalOpen(false);
        navigate("/")
      }, 3200);
    } else {
      // User is not logged in, show toast
      toast.error("Please login to place an order");
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="text-xl md:text-2xl mt-2 font-semibold mb-4">Order Summary</div>
        <hr />
        <div className="flex  mt-3 justify-between items-center mb-2">
          <div className="text-sm font-medium">Total Price ({cartItems.length} items)</div>
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
            + &#8377; <span className="font-bold">{deliveryCharge.toFixed(2)}</span>
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
        <button
          onClick={placeOrderHandler}
          className="bg-orange-400 text-white py-2 px-4 rounded mt-6 w-full"
        >
          Place Order
        </button>
      </div>

      {/* Order Confirmation Modal */}
      {isModalOpen && (
        <animated.div style={fade}>
          <div className="fixed z-10 inset-0 overflow-y-auto " style={{ width: '100vw', border: '2px solid red', backdropFilter: 'blur(5px)' }}>
            <div className="flex items-center justify-center min-h-screen">
              <animated.div style={textFade}>
                <div className="bg-white p-4 rounded-lg text-left shadow-xl" style={{
                  width: '50vh', height: '50vh', display: 'flex', flexDirection: 'column', borderRadius: '1.5rem',
                  justifyContent: 'center', alignItems: 'center', gap: '2rem'
                }}>
                  <p className="confirmTitle">Order Confirmed! 🎉</p>
                  <p className="para">Placing Your Order..</p>
                  <p className="para">Contacting Restaurants...</p>
                  <p className="para">Sending Email...</p>
                  <p className="para">Redirecting To Home Page...</p>
                  {/* You can add more steps or customize as needed */}
                </div>
              </animated.div>
            </div>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default OrderSummary;
