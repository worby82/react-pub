import React from "react";
import "../css/tag.css"
import { tag } from "./Bem";

const tagData = ["Новинки", "Сладкие", "Хит", "Крепкие", "Лонг", "Шот"]
const Tag = ({ filterData, filter }) => {

    // const tagItem = tagData?.map((tagItem, id) => {
    //     const classes = tagItem == filter;
    //     return (
    //         <li className={tag('item', { active: classes })} key={id} onClick={() => filterData(tagItem)}>{tagItem}</li>
    //     )
    // })
    // return (
    //     <ul className={tag()}>{tagItem}</ul>
    // )

    // const tagItem = 
    return (
        <ul className={tag()}>{
            tagData?.map((tagItem, id) => {
                const classes = tagItem == filter;
                return (
                    <li className={tag('item', { active: classes })} key={id} onClick={() => filterData(tagItem)}>{tagItem}</li>
                )
            })
        }</ul>
    )
}

export default Tag;