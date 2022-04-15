import React from "react";
import { text } from "./Bem";
import '../css/text.css'

const Text = ({ name, value, cn, exclusion }) => {
    return (
        exclusion
            ? (<p className={text({ exclusion: true })} >
                <span className={text('exclusion-item')}>{name}</span>
                <span className={text('exclusion-item')}>{value}</span>
            </p>)
            : <p className={text(cn)}>{value}</p>
    )
}

export default Text;