import React from 'react';


const Coin = ({name, image, symbol,price, volume, priceChanged, marketCap})=> {

  return (

    <div className='d-flex-lg-row shadow-lg mb-2 mx-auto px-5'>
      
          <div className=" col-lg-10 px-5 mx-5">
              <div className="d-lg-flex coin w-100 mx-5 py-3 ">
              <p className=""><img src={image} alt='image'></img></p>  
              <p className="w-25 text-center">{symbol.toUpperCase()}</p>
                  <p className="w-25">{name}</p>
                  
                  <p className="w-25 ">${price.toLocaleString()}</p>
                        <p className="w-25">${volume.toLocaleString()}</p>
                        <p className="w-25 mt-2">{priceChanged > 0 ? (<p className='text-success'>${priceChanged.toFixed(2)}%</p>) :
                        (<p className='text-danger'>${priceChanged.toFixed(2)}%</p>
                        )}
                        </p>
                        <p className="mt-1">MKT Cap: ${marketCap.toLocaleString()}
                        </p>
              </div>   

            
          </div>
    </div>

    
  );
}

export default Coin;
