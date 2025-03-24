import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className='welcome'>Welcome to DarkWhite, if you wanna buy something, go to the <Link to='/shop'>Shop</Link></div>
  )
}

export default WelcomePage