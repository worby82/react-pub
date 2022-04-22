import React, { useEffect, useState } from "react";
import CoctailData from "../API/CoctailData";
// import Cocktail_data from "../cocktail.json"
import * as cn from "../components/Bem";
import Cocktail_list from "../components/Cocktail_list";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";



const Home = () => {
  const [defaultData, setDefaultData] = useState(null);
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState(0);
  // const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // setIsLoad(true);
      const card = await CoctailData.getAll();
      setDefaultData([...card]);
      // setIsLoad(false);
      setData([...card])
    }
    fetchData();
  }, [])
  const filterData = (tag) => {
    setFilter(filter == tag ? 0 : tag)
    setData([...defaultData])
  }
  useEffect(()=>{
    if (filter != 0) {
      setData([...defaultData.filter(data => (data.tags.filter(tags => tags === filter) == filter) == true)])
    }
  },[filter])

  return (
    <div className={cn.app()}>
      <Header titlePage={'Главная'} filterData={filterData} filter={filter} isHome />
      <main className={cn.main()}>
        <div className={cn.container()}>
          {
            data==null
              ? <Title lvl="2" cn={{ 'no-result': true }} value="Загрузка" />
              : <Cocktail_list cardData={data} />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;