import React from "react";
import { Link } from "react-router-dom";
import { btn, container, footer } from "./Bem";
import Search_form from "./Search_form";
import '../css/footer.css'

const Footer = ({ isSearch }) => {
    return (
        <footer className={footer()}>
            <div className={container()}>
                {
                    isSearch
                        ? <Search_form />
                        : <Link className={btn({ search: true })} to="/react-pub/search/">Поиск</Link>
                }
            </div>
        </footer>
    )
}

export default Footer;