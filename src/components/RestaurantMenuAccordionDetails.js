import React, { useState } from "react";

import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuAccordionDetails = (props) => {
    const { cardInfo, onClickAddFoodItem } = props;
    console.log(cardInfo.card.card.itemCards,);
    const dispatch=useDispatch()
    const addItemHandler=(card)=>{
        dispatch(addItem(card))
        onClickAddFoodItem()
    }


    return cardInfo.card?.card?.itemCards?.map((card) => {
        return (
            <div
                className="flex flex-col justify-between border-b pb-6 mx-2 mb-4 gap-6 md:flex-row"
                key={card?.card?.info?.id}
            >
                <div className="flex flex-col gap-2 w-full md:w-3/4">
                    <span className="font-semibold text-base">
                        {card?.card?.info?.name}
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
                        onClick={() => addItemHandler(card)}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        );
    });
};

export default RestaurantMenuAccordionDetails;
