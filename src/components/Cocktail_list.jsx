import React from "react";
import '../css/cocktail-list.css'
import { cocktailList } from "./Bem";
import Cocktail_card from "./Cocktail_card";

const Cocktail_list = () => {
    return (
        <ul className={cocktailList()}>
            <Cocktail_card />
        </ul>
    )
}

export default Cocktail_list;