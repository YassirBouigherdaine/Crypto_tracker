import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import CoinData from './CoinData';
import CoinChart from '../chart/CoinChart';




function CoinPage() {

    const [coin, setCoin] = useState();
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res =>{
          setCoin(res.data);
           
        })
      }
      ,);
     
  return (
    <>
        <nav className="navbar navbar-expand-lg shadow-lg rounded mb-5">
            <Link className="btn shadow-lg position-absolute top-0 start-0 mt-1 "
              type="button" to="/" >
              <FaHome className="fs-1 myColor" />
            </Link>
        </nav>

        <div className="my-5 d-lg-flex mx-4 text-white">

          <div className="col-lg-3 my-5 text-center shadow-lg mx-1">
                                  {coin && <CoinData
                                      key={coin.id}
                                      name={coin.name}
                                      image={coin.image.large}
                                        rank = {coin.market_cap_rank}
                                        symbol={coin.symbol}
                                        currentPrice={coin.market_data.current_price.usd.toLocaleString()}
                                        circulatingSupply ={coin.market_data.circulating_supply.toLocaleString()}
                                        priceChange24h={coin.market_data.price_change_24h.toFixed(2)}
                                        totalSupply={coin.market_data.total_supply ? (coin.market_data.total_supply.toLocaleString()) : (0)}
                                        description={coin.description.en.split(". ")[0]}
                                        CoinData/>}                                 
          </div>

          <div className="col-lg-9 mt-5 py-3 px-3 shadow-lg">

          <CoinChart/>
            
          </div>
        </div> 
    </>
    
    
  );
}

export default CoinPage;


