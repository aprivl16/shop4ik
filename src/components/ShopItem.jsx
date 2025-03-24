import React, { useState } from 'react'
import { spend } from '../slices/balanceSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToInventory } from '../slices/inventorySlice';
import { store } from '../store/store';

const ShopItem = ({ img, title, price }) => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(store => store.balance.value)
  const [counter, setCounter] = useState({
    isAdded: false,
    value: 1,
  })
  return (
    <div className="shop-item"  >
      <h4 className="shop-item__title">{title}</h4>
      <div className="shop-item__content">

        <div className="shop-item__img-container">
          <img src={img} alt="" />
        </div>

        <div className="shop-item__btn-wrapper">
          <button
            className='count-btn'
            style={{ display: counter.isAdded ? 'block' : "none" }}
            onClick={() => setCounter(prev => ({ ...prev, value: prev.value > 1 ?  prev.value - 1 : prev.value }))}
          >
            -
          </button>

          <button className='buy-btn' onClick={() => {
            dispatch(spend({ img, title, price: price * counter.value }))
            dispatch(addToInventory({ img, title, currentBalance, price: price * counter.value, quantity: counter.value, }))
            setCounter(prev => ({ ...prev, isAdded: true }))
          }
          }>
            <div className="">Buy {counter.isAdded ? counter.value : "one"}</div>
            <div className="balance-icon">{price * counter.value}</div>
          </button>

          <button
            className='count-btn'
            style={{ display: counter.isAdded ? 'block' : "none" }}
            onClick={() => setCounter(prev => ({ ...prev, value: prev.value + 1 }))}
          >
            +
          </button>
        </div>

      </div>
    </div>
  )
}

export default ShopItem