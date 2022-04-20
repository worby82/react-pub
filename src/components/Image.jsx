import React from "react";
import '../css/image.css'
import { image } from "./Bem";

const Image = (props) => {
    const isHttpURL = (imageSrc) => {
        if(imageSrc.startsWith('http:')){
            return imageSrc.slice(5);
        }
        return imageSrc;
    }
    return (
        <picture className={image({ detail: props.detail })}>
            <source srcSet={isHttpURL(props.image.webpPrev)} type="image/webp" />
            <img src={isHttpURL(props.image.jpgPrev)} alt={props.image.alt} width={props.width} height={props.height} />
        </picture>
    )
}

export default Image;