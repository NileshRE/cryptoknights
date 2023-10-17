import React from 'react'
import useCryptoAPI from '../services/useCryptoAPI'
import { useSelector } from 'react-redux';
import millify from 'millify';


const Homepage = () => {
  useCryptoAPI();
  const details = useSelector((store)=>store?.coins?.coins)

  return (
    <div className='stats-container'>
        <h3>Global Crypto Stats</h3>
        <div className='stats'>
        <div className='stats-item'>
          <p className='stats-heading'>Total Cryptocurrencies</p>
          <p>{millify(details?.total)}</p>
         </div> 
         <div className='stats-item'>
          <p className='stats-heading'>Total Exchanges</p>
          <p>{details?.exchanges}</p>
         </div>
         <div className='stats-item'>
          <p className='stats-heading'>Total Market Cap</p>
          <p>{millify(details?.cap)}</p>
         </div>
         <div className='stats-item'>
          <p className='stats-heading'>Total 24H Volume</p>
          <p>{millify(details?.volume)}</p>
         </div>
         <div className='stats-item'>
          <p className='stats-heading'>Total Markets</p>
          <p>{millify(details?.markets)}</p>
         </div>
    </div>
  </div>
  )
}

export default Homepage