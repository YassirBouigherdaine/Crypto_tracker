import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Banner from './components/banner/Banner';
import Coins from './components/coins/Coins';
import NavBar from './components/NavBar';



function App() {

  return (
    <div className="">
      <NavBar/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Coins/>} />
      </Routes>
    </div>
  );
}

export default App;
