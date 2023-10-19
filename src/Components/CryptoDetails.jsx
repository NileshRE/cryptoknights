import React, {useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'


const CryptoDetails = () => {
  const {coinId} = useParams();
  const[time, setTime] = useState();

  return (
    <div>
        <p>{coinId}</p>
        
    </div>
  )
}

export default CryptoDetails