import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import Cocktail_data from "../cocktail.json"
import '../css/detail.css'

function Home() {
    const params = useParams();
    const data = Cocktail_data[params.id]
    return (
        <div className="app">
            <main className="detail">
                <div className="detail__image">
                    <Image modif="image--detail" image={{jpgPrev: data.jpgDetail, webpPrev: data.webpDetail, alt: data.name}} width={'auto'} height={'auto'} />
                </div>
                <div className="detail__content">
                    <div className="container">
                        <h1 className="title title--cocktail">{data.name}</h1>
                        <p className="text">{data.shortDescription}</p>
                        <h2 className="title title--description">Ингредиенты</h2>
                        {
                            Object.entries(data.ingredients).map(([key, value]) => {
                                return <p className="text text--exclusion" key={key}>
                                        <span className="text__exclusion-item">{key}</span>
                                        <span className="text__exclusion-item">{value}</span>
                                    </p>
                            })
                        }
                        <h2 className="title title--description">Как готовить</h2>
                        {
                            data.cook.map((textData, id) => {
                                return <p className="text" key={id}>{textData}</p>
                            })
                        }
                    </div>
                </div>
            </main>
            <Link className="btn btn--back" to="/react-pub/">
                <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <use xlinkHref="/react-pub/images/sprite.svg#vector"></use>
                </svg>
            </Link>
        </div>
    );
}

export default Home;