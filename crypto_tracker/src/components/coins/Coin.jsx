import React from 'react';



const Coin = ({name, image, symbol,price, volume, priceChanged, marketCap})=> {

  return (

    <div className='d-flex-lg-row shadow-lg mb-2 mx-auto px-5 text-white'>
      
          <div className=" col-lg-10 px-5 mx-5">
              <ul className="d-lg-flex coin w-100 mx-5 py-3 list-unstyled">
              <li className=""><img src={image} alt='image'></img></li>  
              <li className="w-25 text-center">{symbol.toUpperCase()}</li>
                  <li className="w-25">{name}</li>
                  
                  <li className="w-25 ">${price.toLocaleString()}</li>
                        <li className="w-25">${volume.toLocaleString()}</li>
                        <li className="w-25 mt-2">{priceChanged > 0 ? (<p className='text-success'>${priceChanged.toFixed(2)}%</p>) :
                        (<p className='text-danger'>${priceChanged.toFixed(2)}%</p>
                        )}
                        </li>
                        <li className="mt-1">MKT Cap: ${marketCap.toLocaleString()}</li>
              </ul>   

            
          </div>
    </div>

    
  );
}

export default Coin;


