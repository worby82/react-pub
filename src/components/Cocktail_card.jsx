import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import '../css/cocktail-card.css'
import '../css/text.css'
import { cocktailCard, text, title } from "./Bem";

const Cocktail_card = (props) => {
    const card = props.card?.map((card , id) => {
        return (
            <li className={cocktailCard()} key={id}>
                <Image image={{jpgPrev: card.jpgPrev, webpPrev: card.webpPrev, alt: card.name}} width={'100%'} height={'auto'} />
                    <Link className={cocktailCard('inner')} to={card.name!='Пусто' ? `/react-pub/detail/${card.link}` : '#'}>
                    {
                        card.alcoholPresent
                        ?
                        <p className={cocktailCard('alcohol-sticker')}>
                            <span className={cocktailCard('alcohol-present')}>{card.alcoholPresent}</span>
                            Алкоголь
                        </p>
                        :
                        <p className={text({'no-result':true})}>Ничего не найдено</p>
                    }
                    <h2 className={title({'cocktail': true})}>{card.name}</h2>
                    <p className={text()}>{card.shortDesciption}</p>
                    </Link>
            </li>
        )
    })
    
    return card;
}

export default Cocktail_card;