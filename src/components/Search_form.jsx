import React, { useRef } from "react";
import { btn, search } from "./Bem";
import Icon from "./Icon";
import '../css/search.css'
import { useDispatch } from "react-redux";
import { searchCoctail } from "../store/reducers/dataSlice";

const Search_form = () => {
    const searchInput = useRef(null)
    const dispatch = useDispatch();
    return (
        <form className={search()} onSubmit={e => { e.preventDefault(); }}>
            <input
                className={search('input')}
                type="text"
                placeholder="Поиск"
                ref={searchInput}
                onChange={() => dispatch(searchCoctail(searchInput.current.value))}
            />
            <button className={btn({ 'search-form': true })} type="button" aria-label="Поиск">
                <Icon cn={btn('icon', { search: true })} icon='search' />
            </button>
        </form>
    )
}

export default Search_form;