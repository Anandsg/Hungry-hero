import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseQuantity,
  decreaseQuantity,
} from "../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faSquareCaretUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const RestaurantMenuAccordionDetails = (props) => {
  const { cardInfo, onClickAddFoodItem } = props;
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const addItemHandler = (card) => {
    dispatch(addItem(card));
    onClickAddFoodItem();
  };

  const increaseItemHandler = (id) => {
    dispatch(increaseQuantity(id));
  };
  const decreaseItemHandler = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return cardInfo.card?.card?.itemCards?.map((card) => {
    const itemInCart = cartItems.find(
      (item) => item.info.id === card.card.info.id
    );
    return (
      <div
        className="flex flex-col justify-between border-b pb-6 mx-2 mb-4 gap-6 md:flex-row"
        key={card?.card?.info?.id}
      >
        <div className="flex flex-col gap-2 w-full md:w-3/4">
          <div className="flex items-center gap-2">
            {card?.card?.info?.itemAttribute?.vegClassifier === "VEG" && (
              <FontAwesomeIcon
                icon={faCircleDot}
                className="w-3 h-3 text-green-600"
              />
            )}
            {card?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" && (
              <FontAwesomeIcon
                icon={faSquareCaretUp}
                className="w-3 h-3 text-red-600"
              />
            )}
            {card?.card?.info?.isBestseller && (
              <span className="flex gap-1 text-orange-300 mt-[1px]">
                <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                <span className="-mt-[1px]">Bestseller</span>
              </span>
            )}
          </div>
          <span className="font-semibold text-base">
            {card?.card?.info?.name}{" "}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              &#8377;
              {card?.card?.info?.defaultPrice
                ? (card?.card?.info?.defaultPrice / 100).toFixed(2)
                : 150}
            </span>
            {card?.card?.info?.offerTags && (
              <span className="text-[10px] font-medium px-[6px] bg-red-100 text-orange-500">
                {card?.card?.info?.offerTags[0]?.title} |{" "}
                {card?.card?.info?.offerTags[0]?.subTitle}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 font-light ">
            {card?.card?.info?.description}
          </p>
        </div>
        <div className=" flex flex-col gap-1 relative md:w-1/4 w-auto">
          <img
            src={
              card?.card?.info?.imageId
                ? CDN_URL + card?.card?.info?.imageId
                : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
            }
            alt=""
            className="w-32 h-20 rounded self-center object-cover"
          />
          {itemInCart ? (
            <div className="flex space-x-5 absolute bottom-[-8px] bg-white shadow-md text-[10px] py-1 px-4 border self-center  font-medium rounded">
              <FaMinus
                onClick={() => decreaseItemHandler(card?.card?.info?.id)}
                className="hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out align-middle mt-1"
              />
              <span> {itemInCart.info.quantity}</span>
              <FaPlus
                onClick={() => increaseItemHandler(card?.card?.info?.id)}
                className="hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out mt-1"
              />
            </div>
          ) : (
            <button
              className="absolute bottom-[-8px] bg-white text-black shadow-md border self-center text-[10px] py-1 px-4 font-medium rounded  active:scale-90 hover:bg-orange-200 transition-all duration-300 ease-in-out"
              onClick={() => addItemHandler(card)}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    );
  });
};

export default RestaurantMenuAccordionDetails;
