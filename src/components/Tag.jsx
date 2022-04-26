import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/tag.css"
import { filterData } from "../store/reducers/dataSlice";
import { tag } from "./Bem";

const tagData = ["Новинки", "Сладкие", "Хит", "Крепкие", "Лонг", "Шот"]
const Tag = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.data.filter)
    return (
        <ul className={tag()}>{
            tagData?.map((tagItem, id) => {
                const classes = tagItem == filter;
                return (
                    <li className={tag('item', { active: classes })} key={id} onClick={() => dispatch(filterData(tagItem))}>{tagItem}</li>
                )
            })
        }</ul>
    )
}

export default Tag;