import React from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import ResShimmer from "./ResShimmer";
import toast, { Toaster } from "react-hot-toast";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";

const RestruarantMenu = () => {
  // Read dynamic URL params
  const { resId } = useParams();
  // CUSTOM HOOK
  const [restaurant, resmenu, resOffers] = useRestaurant(resId);

  const addFoodItem = (card) => {
    // dispatch(addItem(card)); //this is done in children component now
    toast.success("Item added to cart");
  };

  return !restaurant ? (
    <ResShimmer />
  ) : (
    <div className="flex justify-center">
      <Toaster position="top-center" />
      <div className="w-full md:w-4/6 2xl:w-3/6">
        {/* <h1> Res-ID : {resId} </h1> */}
        <div className="flex flex-col  md:w-full p-4 border m-auto">
          <div className="flex flex-col  justify-between border-b md:flex-row gap-3">
            <div className="flex flex-col text-xs w-full text-[#535665] font-medium gap-1">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-black pb-2">
                    <h2> {restaurant.name} </h2>
                  </span>
                  <span className="">{restaurant.cuisines.join(", ")}</span>
                  <span className="pb-4">
                    {restaurant.areaName}, {restaurant.city}{" "}
                    <i className="text-blue-600 fa-solid fa-location-dot"></i>
                  </span>
                  <img
                    className="hidden sm:block w-56 h-36 rounded-md mb-4"
                    src={CDN_URL + restaurant.cloudinaryImageId}
                    alt=""
                  />
                </div>
                <div className="border border-b flex flex-col items-center p-2 rounded-md ">
                  <span
                    className={`text-lg font-bold ${
                      restaurant.avgRating >= 4
                        ? "text-green-500"
                        : restaurant.avgRating >= 2
                        ? "text-amber-500"
                        : "text-red-500"
                    }`}
                  >
                    <span
                      className={`text-xl ${
                        restaurant.avgRating >= 4
                          ? "text-green-500"
                          : restaurant.avgRating >= 2
                          ? "text-amber-500"
                          : "text-red-500"
                      }`}
                    >
                      ★{" "}
                    </span>
                    {restaurant.avgRating}
                  </span>
                  <div className="border-t w-5/6 my-2"></div>
                  {restaurant.totalRatingsString}
                </div>
              </div>
              {restaurant.feeDetails.message && (
                <div className="flex gap-2 items-center">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${restaurant.feeDetails.icon}`}
                  />
                  <span className="text-xs sm:text-sm">
                    {restaurant.feeDetails.message}
                  </span>
                </div>
              )}
              <div className="border border-dashed my-2"></div>
              <div className="flex gap-6">
                {restaurant.sla.slaString && (
                  <div className="flex items-center gap-2 font-semibold">
                    <svg
                      className="RestaurantTimeCost_icon__8UdT4"
                      width="16"
                      height="16"
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
                        d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                        fill="#3E4152"
                      ></path>
                    </svg>
                    <span className="font-bold text-base">
                      {restaurant.sla.slaString}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 font-semibold">
                  <svg
                    className="RestaurantTimeCost_icon__8UdT4"
                    width="16"
                    height="16"
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
                  <span className="font-bold text-base">
                    {restaurant.costForTwoMessage}
                  </span>
                </div>
              </div>
              <div className="flex overflow-x-auto mt-2">
                <style>
                  {`
      .flex::-webkit-scrollbar {
        width: 0 !important;
      }
    `}
                </style>
                {resOffers?.card?.card?.gridElements?.infoWithStyle?.offers.map(
                  (offer, index) => {
                    return (
                      <div
                        className="flex-shrink-0 border border-p px-2 py-3 mr-4 rounded-md"
                        key={index}
                      >
                        <div className="flex flex-col justify-start gap-1">
                          <div className="flex gap-2">
                            <img
                              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/${offer.info?.offerLogo}`}
                              className="h-6 w-6"
                            />
                            <p className="text-sm font-bold text-gray-600">
                              {offer.info?.header}
                            </p>
                          </div>
                          <span className="text-gray-500 text-xs font-bold">
                            {offer.info?.couponCode}
                            {"  I  "}
                            <span className="text-gray-500 text-xs font-bold">
                              {offer.info?.description}
                            </span>
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              {resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards
                .slice(1)
                .map((cardInfo, index) => {
                  return (
                    cardInfo?.card?.card?.title &&
                    cardInfo?.card?.card?.itemCards?.map(() => null).length && (
                      <div key={index}>
                        <RestaurantMenuAccordion
                          cardInfo={cardInfo}
                          onClickAddFoodItem={() => addFoodItem()}
                        />
                        <div className="pb-4 bg-zinc-100"></div>
                      </div>
                    )
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestruarantMenu;
