import React from 'react'
import { logo } from '../Utils/constants'

const Navbar= () => {
return(
  <div className="nav-container">
    <div>
    <img className="logo" src={logo} alt="logo"/>
    </div>
    <ul className="nav-items">
      <li>Home</li>
      <li>Crypto Knights</li>
      <li>Exchanges</li>
      <li>Crypto Details</li>
      <li>News</li>
    </ul>
  </div>
)
}

export default Navbar
    