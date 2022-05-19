import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app, container, main } from "../components/Bem";
import Cocktail_list from "../components/Cocktail_list";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import { fetchData } from "../store/reducers/dataSlice";

const Search = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.data.searchValue)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div className={app()}>
            <Header titlePage={'Поиск'} />
            <main className={main()}>
                <div className={container()}>
                    {
                        searchValue != ''
                            ? <Cocktail_list />
                            : <Title lvl={'2'} cn={{ 'no-result': true }} value={'Нет запроса - нет результатов'} />
                    }
                </div>
            </main>
            <Footer isSearch />
        </div>
    );
}

export default Search;