import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { store } from '../../store/store'
import { earn } from '../../balanceLogic/balance.slice';

const Earn = () => {
  const dispatch = useDispatch();
  return (
    <div className="earn__wrapper">
      <div className="">Click here to get 1 gold</div>
      <button className="money-clicker" onClick={() => dispatch(earn())}></button>
    </div>
  )
}

export default Earn