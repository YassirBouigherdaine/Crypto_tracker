import React from 'react';
import Banner from './banner/Banner';
import CoinsList from './coins/CoinsList';
import NavBar from './NavBar';



const HomePage=()=> {

  return (
    <div>

      <NavBar/>
      <Banner/>
      <CoinsList/>
       
    </div>
  );
}

export default HomePage;
