import React from "react";
import "../css/tag.css"

const tagData = ["Новинки","Сладкие","Хит","Крепкие","Лонг","Шот"]
const Tag = () => {
    const tag = tagData?.map((tag , id) => {
        // const classes = tag ?'tag__item tag__item--active' :'tag__item' ;
        const classes = 'tag__item' ;
        return (
            <li className={classes} key={id}>{tag}</li>
        )
    })
    return (
        <ul className="tag">{tag}
        {/* <li className="tag__item">Новинки</li>
        <li className="tag__item tag__item--active">Сладкие</li>
        <li className="tag__item">Хит</li>
        <li className="tag__item">Крепкие</li>
        <li className="tag__item">Лонг</li>
        <li className="tag__item">Шот</li> */}
        </ul>
    )
}

export default Tag;