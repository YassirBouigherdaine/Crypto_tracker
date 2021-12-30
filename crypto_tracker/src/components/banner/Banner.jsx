import React from 'react';
import Carousel from '../Carousel';



function Banner() {
    
    return (
      <div >
        <div className="bannerContent">
          <div className="tagline">
            <p
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 10,
                fontFamily: "Montserrat",
                background:"transparent"
              }}
            >
              CRYPTO
            </p>
            <p
              variant="subtitle2"
              style={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                background:"transparent"
              }}
            >
              Get all the Info regarding your favorite Crypto Currency
            </p>
          </div >
          <Carousel />
          </div>
      </div>
    );
  }
  
  export default Banner;