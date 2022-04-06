import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/react-pub/" element={<Home />}/>
        <Route path="/react-pub/search/" element={<Search />} />
        <Route path="/react-pub/detail/:id" element={<Detail />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;