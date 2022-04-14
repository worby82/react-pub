import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Cocktail_data from "../cocktail.json"
import { app, header, search, container, title, logo, main, footer, btn } from "../components/Bem";
import Cocktail_list from "../components/Cocktail_list";
import Time from "../components/Time";
import '../css/search.css'

function Search() {
    const [data, setData] = useState(Cocktail_data);
    const [searchValue, setSearchValue] = useState('');

    const searchCoctail = useMemo(() => {
        if(searchValue != '') {
            return[...data].filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
    }, [searchValue,data])
    
    
    return (
        <div className={app()}>
            <header className={header()}>
                <div className={container()}>
                    <div className={header('text-wrapper')}>
                        <h1 className={title()}>Поиск</h1>
                        <Time />
                    </div>
                    <Link to="/react-pub/">
                        <svg className={logo()} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <use xlinkHref="/react-pub/images/sprite.svg#logo"></use>
                        </svg>
                    </Link>
                </div>
            </header>
            <main className={main()}>
                <div className={container()}>
                    {
                        searchValue != '' 
                        ? 
                        <Cocktail_list cardData= {
                            searchCoctail.length
                                ?searchCoctail
                                :[
                                    {
                                        name: "Пусто",
                                        shortDesciption: "Попробуйте изменить запрос",
                                        webpPrev : "/react-pub/images/no-result.webp",
                                        jpgPrev : "/react-pub/images/no-result.jpg"
                                    }
                                ]
                            } />
                        
                        :
                        <h2 className={title({'no-result': true})}>Нет запроса - нет результатов</h2>
                    }
                </div>
            </main>
            <footer className={footer()}>
                <div className={container()}>
                    {/* <a className="btn btn--search" href="search/">Поиск</a> */}
                    <form className={search()} action="" method="get">
                        <input className={search('input')} type="text" placeholder="Поиск" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                        <button className={btn({'search-form': true})} type="button">
                            <svg className={btn('icon',{search: true})} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <use xlinkHref="/react-pub/images/sprite.svg#search"></use>
                            </svg>
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
}

export default Search;