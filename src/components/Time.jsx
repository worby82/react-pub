import React from "react";
import { text } from "./Bem";

const Time = () => {
    const currDate = new Date();
    const currDateTime = currDate.getFullYear() + '-' + currDate.getMonth() + '-' + currDate.getDate();
    return (
        <time className={text()} dateTime={currDateTime}>{currDate.toLocaleString("ru", { day: 'numeric', month: 'long' })} {currDate.getFullYear()}</time>
    )
}

export default Time;