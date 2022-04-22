import React from "react";
import '../css/image.css'
import { imageCn } from "./Bem";

const Image = ({detail , image, width, height}) => {
    const isHttpURL = (imageSrc) => {
        if(imageSrc.startsWith('http:')){
            return imageSrc.slice(5);
        }
        return imageSrc;
    }
    return (
        <picture className={imageCn({ detail: detail })}>
            <source srcSet={isHttpURL(image.webpPrev)} type="image/webp" />
            <img src={isHttpURL(image.jpgPrev)} alt={image.alt} width={width} height={height} />
        </picture>
    )
}

export default Image;