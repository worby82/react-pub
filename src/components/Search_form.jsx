import React from "react";
import { btn, search } from "./Bem";
import Icon from "./Icon";
import '../css/search.css'

const Search_form = ({ searchValue, setSearchValue }) => {
    return (
        <form className={search()} action="" method="get" onSubmit={e => { e.preventDefault(); }}>
            <input className={search('input')} type="text" placeholder="Поиск" value={searchValue} onChange={setSearchValue} />
            <button className={btn({ 'search-form': true })} type="button">
                <Icon cn={btn('icon', { search: true })} icon='search' />
            </button>
        </form>
    )
}

export default Search_form;