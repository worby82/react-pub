import React from "react";
import Image from "./Image.jsx";
import '../css/cocktail-card.css'
import '../css/text.css'

const Cocktail_card = (props) => {
    const card = props.card?.map((card , id) => {
        return (
            <li className="cocktail-card" key={id}>
                <Image image={{jpgPrev: card.jpgPrev, webpPrev: card.webpPrev, alt: card.name}} width={'100%'} height={'auto'} />
                <a className="cocktail-card__inner" href={card.link}>
                    <p className="cocktail-card__alcohol-sticker">
                        <span className="cocktail-card__alcohol-present">{card.alcoholPresent}</span>
                        Алкоголь
                    </p>
                    <h2 className="title title--cocktail">{card.name}</h2>
                    <p className="text">{card.shortDesciption}</p>
                </a>
            </li>
        )
    })
    return card;
}

export default Cocktail_card;