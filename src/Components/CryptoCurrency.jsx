import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import useCryptoAPI from '../services/useCryptoAPI'
import { useSelector } from 'react-redux'

const CryptoCurrency = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const [searchItem, setSearchItem] = useState('');

  useCryptoAPI(count);
  const coinsList = useSelector((store)=>store?.coins.coins?.coins)

  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(()=>{
    if(coinsList){
    const filteredData = coinsList?.filter((coin)=> coin?.name.toLowerCase().includes(searchItem.toLowerCase()));
      setFilteredCoins(filteredData);
    }
  },[coinsList, searchItem])
    

  return (
    <>
    <div className='search-coin'>
      <input placeholder='Search any coin' type='text' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
    </div>
    <div className="cryptos-list">
      {coinsList?.map((coin)=>(
        <div className='crypto-card' key={coin.uuid}>
          <Link className='card-link' to={`/cryptoDetails/${coin.uuid}`}>
        <div className='rank-name'>
        <p className='rank'>{coin.rank}.</p>
        <p className='name'>{coin.name}</p>
        </div>
        <img className="icon" src={coin.iconUrl} alt={coin.name} />
        <div className='coin-data'>
        <p>Price:{millify(coin.price)}</p>
        <p>Change:{millify(coin.change)}%</p>
        <p>Market Cap:{millify(coin.marketCap)}</p>
        </div>
        </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default CryptoCurrency