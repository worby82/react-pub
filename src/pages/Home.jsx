import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cn from "../components/Bem";
import Cocktail_list from "../components/Cocktail_list";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import { fetchData } from "../store/reducers/dataSlice";



const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.data.status)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className={cn.app()}>
      <Header titlePage={'Главная'} filter isHome />
      <main className={cn.main()}>
        <div className={cn.container()}>
          {
            status !== 'fulfilled'
              ? <Title lvl="2" cn={{ 'no-result': true }} value={status} />
              : <Cocktail_list />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;