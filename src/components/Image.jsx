import React from "react";
import '../css/image.css'
import { image } from "./Bem";

const Image = (props) => {
    // const classes = props.modif ?'image '+props.modif :'image' ;
    return (
        <picture className={image({ detail: props.detail })}>
            <source srcSet={props.image.webpPrev} type="image/webp" />
            <img src={props.image.jpgPrev} alt={props.image.alt} width={props.width} height={props.height} />
        </picture>
    )
}

export default Image;