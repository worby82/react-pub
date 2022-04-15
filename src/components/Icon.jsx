import React from "react";

const Icon = ({ cn, icon }) => {
    return (
        <svg className={cn} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={`/react-pub/images/sprite.svg#${icon}`}></use>
        </svg>
    )
}

export default Icon;