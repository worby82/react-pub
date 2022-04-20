import React, { useEffect, useMemo, useState } from "react";
import CoctailData from "../API/CoctailData";
// import Cocktail_data from "../cocktail.json"
import { app, container, main } from "../components/Bem";
import Cocktail_list from "../components/Cocktail_list";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

function Search() {
    const [data, setData] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        async function fetchData() {
            const card = await CoctailData.getAll();
            setData([...card])
        }
        fetchData();
    }, [])

    const searchCoctail = useMemo(() => {
        if (searchValue != '') {
            return [...data].filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
    }, [searchValue, data])


    return (
        <div className={app()}>
            <Header titlePage={'Поиск'} />
            <main className={main()}>
                <div className={container()}>
                    {
                        searchValue != ''
                            ?
                            <Cocktail_list cardData={
                                searchCoctail.length
                                    ? searchCoctail
                                    : [
                                        {
                                            name: "Пусто",
                                            shortDesciption: "Попробуйте изменить запрос",
                                            webpPrev: "/react-pub/images/no-result.webp",
                                            jpgPrev: "/react-pub/images/no-result.jpg"
                                        }
                                    ]
                            } />

                            : <Title lvl={'2'} cn={{ 'no-result': true }} value={'Нет запроса - нет результатов'} />
                    }
                </div>
            </main>
            <Footer searchValue={searchValue} setSearchValue={e => setSearchValue(e.target.value)} />
        </div>
    );
}

export default Search;