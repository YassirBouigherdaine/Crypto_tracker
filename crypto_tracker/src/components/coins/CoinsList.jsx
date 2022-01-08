import React,{useState, useEffect} from 'react';
import { Link} from "react-router-dom";
import axios from 'axios'
import Coin from './Coin';


const CoinsList = ()=> {

  const [search, setSearch] = useState('');
  const [coins, setCoins]= useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage]= useState(1);

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
      setLoading(false);
    })
  }
  ,[]);

  const handleChange = (e)=>{
     setSearch(e.target.value)
  }

  const searchCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())

);

const goToPreviousPage=()=> {
  if(page > 1){
    setPage((page - 1));
  }
}
const goToNextPage=()=> {
  if(page < 5){
    setPage((page + 1));
  }
}

function changePage(e) {
  const pageNumber = Number(e.target.textContent);
  setPage(pageNumber);
}


  return (
    <>
    

    <div className='container-fluid text-white'>

        <section className="col-lg-12 text-center mb-5 ">

            <form className="container-fluid w-75 py-3 px-5 shadow-lg p-3 mb-5 mt-5 rounded">

            <h1 className="display-6  mb-3 ">Search</h1>

            <div className="input-group mb-3 px-3 py-3">
                <input type="text" className="form-control bg-transparent text-white" placeholder="Search" onChange={handleChange}/>

            </div>

            </form>

        </section>

          {loading ? (<>
                        <div className='text-center'>
                              <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-grow text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-grow text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                    </div>
          </>):(searchCoins.slice((page-1)*10,(page-1)*10+10).map(c =>{
                              return(
                                <Link to={`/coins/${c.id}`} key={c.id} className=" text-decoration-none"> 
                                <Coin 
                                  name={c.name}
                                    image={c.image}
                                    symbol={c.symbol}
                                    price={c.current_price}
                                    marketCap={c.market_cap}
                                    priceChanged = {c.price_change_percentage_24h}
                                    volume={c.total_volume}
                                  />
                                  </Link>
                                  
                              )
                          }))}

            <nav aria-label="Page navigation ">
              <ul className="pagination justify-content-center my-4 ">
                <li className="">
                  <a className="btn btn-warning" onClick={goToPreviousPage} >Previous</a>
                </li>
                {[1,2,3,4,5].map((n, indx)=>{
                  return(
                    <li className="" key={indx}>
                      <a className="btn btn-dark" onClick={changePage}>{n}</a>
                      </li>
                  )
                })}
                
                <li className="">
                  <a className="btn btn-warning" onClick={goToNextPage}>Next</a>
                </li>
              </ul>
            </nav>

      </div>
    </>
    
  );
}

export default CoinsList;
