import React from 'react';



const CoinData = ({name, image, symbol, currentPrice,circulatingSupply, priceChange24h,totalSupply, rank, description})=> {

  return (
    <div className=" mx-auto py-5 fw-light px-4">
        <ul className="list-group list-group-flush list-unstyled">
            <li className="fs-3 fw-bolder">{symbol.toUpperCase()}</li>
            <li className="p-4"><img src={image} alt={name}  style={{height:80,width:80 }}></img></li>  
            <li className="p-2">{name}</li>
            <li className="p-2"> Rank : {rank}</li> 
            <li className="p-2"> Current Price : ${currentPrice}</li>
            <li className="p-2"> Circulating Supply : {circulatingSupply}</li>
            <li className="p-2"> price change 24h : {priceChange24h}</li>
            <li className="p-2"> Total supply : {totalSupply}</li>
            <li className="pt-4">{description}</li> 
        </ul>

        
    </div>   
  );
}

export default CoinData;



 