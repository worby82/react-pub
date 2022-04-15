import React from "react";
import { title } from "./Bem";
import '../css/title.css'


const Title = ({ lvl, cn, value }) => {
    const H = 'h' + lvl;
    return (
        <H className={title(cn)}>{value}</H>
    )
}

export default Title;