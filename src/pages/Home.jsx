import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cocktail_data from "../cocktail.json"
import * as cn from "../components/Bem";
import Cocktail_list from "../components/Cocktail_list";
import Tag from "../components/Tag";
import Time from "../components/Time";



function Home() {
  let [data,setData] = useState(Cocktail_data);
  let [filter, setFilter] = useState(0);

  const filterData = (tag) => {
    setFilter(filter = filter == tag ? 0 : tag)
    setData([...data]=Cocktail_data )
    if (filter!=0) {
      setData([...data].filter(data => (data.tags.filter(tags => tags === filter) == filter) == true ))
    }
  }

  return (
    <div className={cn.app()}>
      <header className={cn.header()}>
        <div className={cn.container()}>          
          <div className={cn.header('text-wrapper')}>
              <h1 className={cn.title()}>Главная</h1>
              <Time />
          </div>
          <Tag filterData={filterData} filter={filter}/>
          <svg className={cn.logo()} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref="/react-pub/images/sprite.svg#logo"></use>
          </svg>
        </div>
      </header>
      <main className={cn.main()}>
        <div className={cn.container()}>
          <Cocktail_list cardData={data} />
        </div>
      </main>
      <footer className={cn.footer()}>
        <div className={cn.container()}>
          <Link className={cn.btn({ search: true })} to="/react-pub/search/">Поиск</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;