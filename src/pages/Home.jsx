import React, { useState } from "react";
import Cocktail_data from "../cocktail.json"
import * as cn from "../components/Bem";
import Cocktail_list from "../components/Cocktail_list";
import Footer from "../components/Footer";
import Header from "../components/Header";



function Home() {
  let [data, setData] = useState(Cocktail_data);
  let [filter, setFilter] = useState(0);

  const filterData = (tag) => {
    setFilter(filter = filter == tag ? 0 : tag)
    setData([...data] = Cocktail_data)
    if (filter != 0) {
      setData([...data].filter(data => (data.tags.filter(tags => tags === filter) == filter) == true))
    }
  }

  return (
    <div className={cn.app()}>
      <Header titlePage={'Главная'} filterData={filterData} filter={filter} isHome />
      <main className={cn.main()}>
        <div className={cn.container()}>
          <Cocktail_list cardData={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;