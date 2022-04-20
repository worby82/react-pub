import React from "react";
import { Link } from "react-router-dom";
import { btn, container, footer } from "./Bem";
import Search_form from "./Search_form";
import '../css/footer.css'

const Footer = ({ searchValue, setSearchValue }) => {
    return (
        <footer className={footer()}>
            <div className={container()}>
                {/* <a className="btn btn--search" href="search/">Поиск</a> */}
                {
                    setSearchValue
                        ? <Search_form searchValue={searchValue} setSearchValue={setSearchValue} />
                        : <Link className={btn({ search: true })} to="/react-pub/search/">Поиск</Link>
                }
            </div>
        </footer>
    )
}

export default Footer;