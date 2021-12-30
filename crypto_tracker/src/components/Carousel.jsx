import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import TrendingCoin from './coins/TrendingCoin';


function Carousel() {

  const [trendings, setTrendings]= useState([]);

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setTrendings(res.data);
    })
  }
  ,[])


  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='"max-vw-100 mx-4'>
      <Slider {...settings}>
      {trendings.map(c =>{
                    return(
                      <TrendingCoin 
                      key={c.id}
                       name={c.name}
                        image={c.image}
                        symbol={c.symbol}
                        price={c.current_price}
                        priceChanged = {c.price_change_percentage_24h}
                        
                      />
                    )
                })}

</Slider>
    </div>
  );
};

export default Carousel;
