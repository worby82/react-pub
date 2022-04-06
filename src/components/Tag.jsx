import React from "react";
import "../css/tag.css"

const tagData = ["Новинки","Сладкие","Хит","Крепкие","Лонг","Шот"]
const Tag = ({filterData,filter}) => {
    
    const tag = tagData?.map((tag , id) => {
        const classes = tag == filter ? 'tag__item tag__item--active' :'tag__item' ;
        return (
            <li className={classes} key={id} onClick={()=>filterData(tag)}>{tag}</li>
        )
    })
    return (
        <ul className="tag">{tag}</ul>
    )
}

export default Tag;