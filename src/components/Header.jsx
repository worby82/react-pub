import React from "react";
import { Link } from "react-router-dom";
import { logo, header, container } from "./Bem";
import Icon from "./Icon";
import Tag from "./Tag";
import Time from "./Time";
import Title from "./Title";
import '../css/logo.css'
import '../css/header.css'

const Header = ({ titlePage, filter, isHome }) => {
    return (
        <header className={header()}>
            <div className={container()}>
                <div className={header('text-wrapper')}>
                    <Title lvl='1' value={titlePage} />
                    <Time />
                </div>
                {
                    filter && <Tag />
                }
                {
                    !isHome
                        ? <Link to="/react-pub/"><Icon cn={logo()} icon='logo' /></Link>
                        : <Icon cn={logo()} icon='logo' />
                }
            </div>
        </header>
    )
}

export default Header;