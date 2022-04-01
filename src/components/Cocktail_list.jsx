import React from "react";
import '../css/cocktail-list.css'
import Cocktail_card from "./Cocktail_card";

const Cocktail_list = (props) => {
    const cardData = props.cardData;
    return (
        <ul className="cocktail-list">
            <Cocktail_card card={cardData} />
        </ul>
    )
}

export default Cocktail_list;