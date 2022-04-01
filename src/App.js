import React, { useState } from "react";
import Cocktail_data from "./cocktail.json"
import Cocktail_list from "./components/Cocktail_list";
import Tag from "./components/Tag";

function App() {
  let [data,setData] = useState(Cocktail_data);
  // const data = Cocktail_data;
  // let newData = data;

  let [filter, setFilter] = useState(0);

  const filterData = (tag) => {
    setFilter(filter = filter == tag ? 0 : tag)
    setData([...data]=Cocktail_data )
    if (filter!=0) {
      // const newData = data.filter(data => (data.tags.filter(tags => tags === filter) == filter) == true )
      // console.log(newData);
      // const newData1 = [...data].filter(data => (data.tags.filter(tags => tags === filter) == filter) == true )
      // console.log(newData1);
      setData([...data].filter(data => (data.tags.filter(tags => tags === filter) == filter) == true ))
    }
  }
  // console.log(newData);

  const currDate = new Date();
  const currDateTime = currDate.getFullYear()+'-'+currDate.getMonth()+'-'+currDate.getDate();
  return (
    <div className="app">
      <header className="header">
        <div className="container">          
          <div className="header__text-wrapper">
              <h1 className="title">Главная</h1>
              <time className="text" dateTime={currDateTime}>{currDate.toLocaleString("ru",{day: 'numeric', month: 'long'})} {currDate.getFullYear()}</time>
          </div>
          <Tag filterData={filterData} filter={filter}/>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref="images/sprite.svg#logo"></use>
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
          <a className="btn btn--search" href="search/">Поиск</a>
        </div>
      </footer>
    </div>
  );
}

export default App;