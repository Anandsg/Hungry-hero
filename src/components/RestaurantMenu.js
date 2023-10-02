import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import ResShimmer from "./ResShimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const RestruarantMenu = () => {
  // Read dynamic URL params
  const { resId } = useParams();
  // CUSTOM HOOK
  const [restaurant, resmenu] = useRestaurant(resId);
  const [click,setClick] = useState(false);

  const dispatch = useDispatch();

  const addFoodItem = (card) => {
    dispatch(addItem(card));
  };

  const handleAccordionClick = () => {
    setClick(prev => !prev);
  }

  return !restaurant ? (
    <ResShimmer />
  ) : (
    <div className="flex">
      <div className="w-full">
        {/* <h1> Res-ID : {resId} </h1> */}
        <div className="flex flex-col w-[80%] md:w-2/3 p-4 border m-auto">
          <div className="flex flex-col justify-between pb-4 border-b md:flex-row gap-3">
            <div className="flex flex-col text-xs text-[#535665] font-medium gap-1 w-full">
              <span className="text-xl font-bold text-black">
                <h2> {restaurant.name} </h2>
              </span>
              <span className="">{restaurant.cuisines.join(", ")}</span>
              <span className="">
                {restaurant.areaName}, {restaurant.city}{" "}
                <i className="text-blue-600 fa-solid fa-location-dot"></i>
              </span>
              <img
                className="w-56 h-36 rounded"
                src={CDN_URL + restaurant.cloudinaryImageId}
                alt=""
              />
              <span className="">
                {restaurant.avgRating}★{" "}
                <i className="text-green-600 fa-solid fa-star"></i> |{" "}
                {restaurant.totalRatingsString}
              </span>
              <div className="flex gap-8 items-center border-b py-3 text-sm md:text-base"></div>
              <div className="flex items-center gap-2 font-semibold">
                <svg
                  className="RestaurantTimeCost_icon__8UdT4"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.25"
                    stroke="#3E4152"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                    fill="#3E4152"
                  ></path>
                </svg>
                <span className="">{restaurant.costForTwoMessage}</span>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-xl mt-4 mb-10">
                  Recommended items (
                  {
                    resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                      () => null
                    ).length
                  }
                  )
                </h1>
                <div
                  onClick={handleAccordionClick}
                  className="font-bold text-xl mt-4 mb-10 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={click ? faChevronUp : faChevronDown}
                    className="w-5 h-5"
                  />
                </div>
              </div>
              {click && resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                (card) => {
                  return (
                    <div
                      className="flex flex-col justify-between border-b pb-6 mb-4 gap-6 md:flex-row"
                      key={card?.card?.info?.id}
                    >
                      <div className="flex flex-col gap-2 w-full md:w-3/4">
                        <span className="font-semibold text-base">
                          {card?.card?.info?.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">
                            &#8377;
                            {card?.card?.info?.price
                              ? card?.card?.info?.price / 100
                              : 150}
                          </span>
                          {card?.card?.info?.offerTags && (
                            <span className="text-[10px] font-medium px-[6px] bg-red-100 text-orange-500">
                              {card?.card?.info?.offerTags[0]?.title} |{" "}
                              {card?.card?.info?.offerTags[0]?.subTitle}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#535665] ">
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
                        <button
                          className="absolute bottom-[-8px] bg-white shadow-md border self-center text-[10px] py-1 px-4 font-medium rounded  active:scale-90 hover:bg-orange-200 transition-all duration-300 ease-in-out"
                          onClick={() => addFoodItem(card)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestruarantMenu;
