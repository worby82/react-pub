import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cocktail_data from "../cocktail.json"
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
    <div className="app">
      <header className="header">
        <div className="container">          
          <div className="header__text-wrapper">
              <h1 className="title">Главная</h1>
              <Time />
          </div>
          <Tag filterData={filterData} filter={filter}/>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref="/react-pub/images/sprite.svg#logo"></use>
          </svg>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Cocktail_list cardData={data} />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <Link className="btn btn--search" to="/react-pub/search/">Поиск</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;