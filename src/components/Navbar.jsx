import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const balance = useSelector(store => store.balance.value)
  return (
    <nav className='nav'>
      <div className="container">
        <div className="nav__wrapper">

          <div className="img-wrapper">
            <img src="real-logo.png" alt="" />
          </div>
          <div className="link-wrapper">
            <Link to="/shop">Shop</Link>
            <Link to="/inventary">Inventory</Link>
            <Link to="/earn">Earn Money</Link>
          </div>
          <div className="balance">
            <div className="balance-icon">$</div>
            <div className="balance-score">{balance}</div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar