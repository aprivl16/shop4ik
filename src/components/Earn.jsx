import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { store } from '../store/store'
import { earn } from '../slices/balanceSlice';

const Earn = () => {
  const dispatch = useDispatch();
  fetch('http://localhost:3001/shopItems')
  .then(res => res.json())
  .then(res => console.log(res))
  return (
    <div className="earn__wrapper">
      <div className="">Click here to get 1 gold</div>
      <button className="money-clicker" onClick={() => dispatch(earn())}></button>
    </div>
  )
}

export default Earn