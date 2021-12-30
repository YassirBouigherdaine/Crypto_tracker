import React from 'react';


const TrendingCoin = ({image, symbol, priceChanged})=> {

  return (

    <div className='mx-5'>
                    <p className=""><img src={image} alt='image' style={{ marginBottom: 5,marginLeft:10, height: 120 }}></img></p>
             <div className="mx-5">
                <p className="">{symbol.toUpperCase()}</p>
                <p className="">{priceChanged > 0 ? (<p className='text-success'>${priceChanged.toFixed(2)}%</p>) :
                 (<p className='text-danger'>${priceChanged.toFixed(2)}%</p>
                 )}
               </p> 
               </div>  
    </div>

    
  );
}

export default TrendingCoin;
