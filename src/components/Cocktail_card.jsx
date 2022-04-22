import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import Text from "./Text";
import '../css/cocktail-card.css'
import { cocktailCard } from "./Bem";
import Title from "./Title";

const Cocktail_card = ({cardData}) => {
    // const card = cardData?.map((card, id) => {
    //     return (
    //         <li className={cocktailCard()} key={id}>
    //             <Image image={{ jpgPrev: card.jpgPrev, webpPrev: card.webpPrev, alt: card.name }} width={'100%'} height={'auto'} />
    //             <Link className={cocktailCard('inner')} to={card.name != 'Пусто' ? `/react-pub/detail/${card.id}` : '#'}>
    //                 {
    //                     card.alcoholPresent
    //                         ?
    //                         <p className={cocktailCard('alcohol-sticker')}>
    //                             <span className={cocktailCard('alcohol-present')}>{card.alcoholPresent}</span>
    //                             Алкоголь
    //                         </p>
    //                         : <Text cn={{ 'no-result': true }} value='Ничего не найдено' />
    //                 }
    //                 <Title lvl='2' cn={{ 'cocktail': true }} value={card.name} />
    //                 <Text value={card.shortDescription} />
    //             </Link>
    //         </li>
    //     )
    // })

    // return card;

    return <> {
        cardData?.map((card, id) => {
            return (
                <li className={cocktailCard()} key={id}>
                    <Image image={{ jpgPrev: card.jpgPrev, webpPrev: card.webpPrev, alt: card.name }} width={'100%'} height={'auto'} />
                    <Link className={cocktailCard('inner')} to={card.name != 'Пусто' ? `/react-pub/detail/${card.id}` : '#'}>
                        {
                            card.alcoholPresent
                                ?
                                <p className={cocktailCard('alcohol-sticker')}>
                                    <span className={cocktailCard('alcohol-present')}>{card.alcoholPresent}</span>
                                    Алкоголь
                                </p>
                                : <Text cn={{ 'no-result': true }} value='Ничего не найдено' />
                        }
                        <Title lvl='2' cn={{ 'cocktail': true }} value={card.name} />
                        <Text value={card.shortDescription} />
                    </Link>
                </li>
            )
        })
    }</>
}

export default Cocktail_card;