import React from 'react'
import { logo } from '../Utils/constants'
import { Link } from 'react-router-dom'

const Navbar= () => {
return(
  <div className="nav-container">
    <div>
    <img className="logo" src={logo} alt="logo"/>
    </div>
    <ul className="nav-items">
      <li><Link className="link" to="/">Home</Link></li>
      <li><Link className="link" to="/cryptocurrency">Cryptocurrencies</Link></li>
      <li><Link className="link" to="/exchanges">Exchanges</Link></li>
      <li><Link className="link" to="/news">News</Link></li>
    </ul>
  </div>
)
}

export default Navbar
    