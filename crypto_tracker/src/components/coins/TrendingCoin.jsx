import React from 'react';


const TrendingCoin = ({image, symbol, priceChanged})=> {

  return (

    <div className='mx-5 text-white'>
        <p className=""><img src={image} alt='image' style={{ marginBottom: 5,marginLeft:10, height: 120 }}></img></p>
        <ul className="mx-5 list-unstyled">
          <li>{symbol.toUpperCase()}</li>
          <li>{priceChanged > 0 ? (<p className='text-success'>${priceChanged.toFixed(2)}%</p>) :
          (<p className='text-danger'>${priceChanged.toFixed(2)}%</p>
                 )}
          </li> 
        </ul>  
    </div>

    
  );
}

export default TrendingCoin;
