import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import '../css/cocktail-card.css'
import '../css/text.css'

const Cocktail_card = (props) => {
    const card = props.card?.map((card , id) => {
        return (
            <li className="cocktail-card" key={id}>
                <Image image={{jpgPrev: card.jpgPrev, webpPrev: card.webpPrev, alt: card.name}} width={'100%'} height={'auto'} />
                    <Link className="cocktail-card__inner" to={card.name!='Пусто' ? `/react-pub/detail/${card.link}` : '#'}>
                    {
                        card.alcoholPresent
                        ?
                        <p className="cocktail-card__alcohol-sticker">
                            <span className="cocktail-card__alcohol-present">{card.alcoholPresent}</span>
                            Алкоголь
                        </p>
                        :
                        <p className="text text--no-result">Ничего не найдено</p>
                    }
                    <h2 className="title title--cocktail">{card.name}</h2>
                    <p className="text">{card.shortDesciption}</p>
                    </Link>
            </li>
        )
    })
    
    return card;
}

export default Cocktail_card;