import React, { useState } from 'react';

import RestaurantMenuAccordionDetails from './RestaurantMenuAccordionDetails';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Collapsible from "react-collapsible";


const RestaurantMenuAccordion =(props)=>{

    const { cardInfo, onClickAddFoodItem } = props;

    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpening = () => {
        setIsOpen(true);
    };

    const handleClosing = () => {
        setIsOpen(false);
    };

return (
    <Collapsible
        onOpening={handleOpening}
        onClosing={handleClosing}
        trigger={
            <div className="flex justify-between mx-2 items-center">
                <h1 className="font-bold text-lg mt-4 mb-5">
                    {cardInfo?.card?.card?.title} (
                    {cardInfo?.card?.card?.itemCards?.map(() => null).length})
                </h1>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="w-5 h-5"
                />
            </div>
        }
    >
        <RestaurantMenuAccordionDetails
            cardInfo={cardInfo}
            onClickAddFoodItem={onClickAddFoodItem}
        />
    </Collapsible>
);
}

export default RestaurantMenuAccordion;
