import React from "react"
import '../css/header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container container--header">
                <h1 className="title">Главная</h1>
                <time className="text" datetime="2021-17-08">17 июля 2021</time>
                <ul className="tag">
                    <li className="tag__item">Новинки</li>
                    <li className="tag__item tag__item--active">Сладкие</li>
                    <li className="tag__item">Хит</li>
                    <li className="tag__item">Крепкие</li>
                    <li className="tag__item">Лонг</li>
                    <li className="tag__item">Шот</li>
                </ul>
                {/* <svg className="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <use xlink:href="images/sprite.svg#logo"></use>
                </svg> */}
            </div>
        </header>
    )
}

export default Header;