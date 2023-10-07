import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const RestruarantCards = (props) => {
  const { resData, id, favlist, onClickFav } = props;
  const [isfav, setfav] = useState(favlist.indexOf(id) == -1);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    slaString,
    costForTwo,
    aggregatedDiscountInfo,
  } = resData;
  return (
    <div className="overflow-hidden shadow-md md:shadow-none py-4 px-4 md:py-2 transition-all duration-490 ease-in-out hover:scale-[.95] rounded flex flex-col gap-1 text-[0.7rem] text-[#535665] ">
      <Link to={"/restaurants/" + id}>
        <div className="relative">
          <img
            src={
              CDN_URL +
              (cloudinaryImageId === ""
                ? "s6fhwzl0tss0vgrqvcid"
                : cloudinaryImageId)
            }
            alt=""
            className=" rounded object-cover"
          />
          <span
            className={`absolute text-xl top-0.5 right-0.5 cursor-pointer ${
              !isfav
                ? "text-[red]"
                : "text-[gray] hover:text-[red] duration-200"
            }`}
            onClick={(e) => {
              setfav(!isfav);
              onClickFav(id);
              e.preventDefault();
            }}
          >
            <AiFillHeart />
          </span>
        </div>
        <div className="res-details px-2">
          <h4 className="font-medium text-base text-black">{name}</h4>
          <span className="text-[0.8rem]">{cuisines.join(", ")}</span>
          <div className="flex justify-between items-center my-2 font-medium">
            <div
              className={`flex items-center gap-1 px-1 text-white ${
                avgRating >= 4
                  ? "bg-green-500"
                  : avgRating >= 2
                  ? "bg-amber-500"
                  : "bg-red-500"
              } font-semibold`}
            >
              <span className="text-[0.6rem]">&#9733;</span>
              <span className="text-[0.6rem]">
                {avgRating === "--" ? "4.2" : avgRating}
              </span>
            </div>
            {/* <div className="w-[3px] h-[3px] rounded-full bg-black"></div> */}
            <span className="">{slaString}</span>
            {/* <div className="font-light text-xs">
            {resData.data.cuisines.join(", ")} - {deliveryTime} min
          </div> */}
            <div className="res-price">
              <span className="text-xs">{costForTwo}</span>
            </div>
          </div>
          <div className="flex border-t pt-4 gap-2  font-semibold"></div>

          <div className="flex" style={{ justifyContent: "space-between" }}>
            <span className="text-[#a0522d] text-center">
              {!aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
                ? "30% off | Use NEWFUD"
                : aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestruarantCards;
