import React, { useState } from 'react'
import { spend } from '../slices/balanceSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToInventory } from '../slices/inventorySlice';

const ShopItem = ({ img, title, price, id }) => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(store => store.balance.value)
  const [itemCounter, setItemCounter] = useState({
    isAdded: false,
    value: 1,
  })
  
  return (
    <div className="shop-item">
      <h4 className="shop-item__title">{title}</h4>

      <div className="shop-item__content">

        <div className="shop-item__img-container">
          <img src={img} alt="" />
        </div>

        <div className="shop-item__btn-wrapper">
          <button
            className='count-btn btn-decrease-itemCounter'
            style={{ display: itemCounter.isAdded ? 'block' : 'none' }}
            onClick={() => setItemCounter(prev => ({ ...prev, value: prev.value > 1 ? prev.value - 1 : prev.value }))}
          >
            -
          </button>

          <button className='buy-btn' onClick={() => {
            dispatch(spend({ cost: price * itemCounter.value }))
            dispatch(addToInventory({
              img, title, id, currentBalance, 
              cost: price * itemCounter.value,
              numOfNewShopItems: itemCounter.value
            }))
            setItemCounter(prev => ({ ...prev, isAdded: true }))
          }
          }>
            <div className="">Buy {itemCounter.isAdded ? itemCounter.value : "one"}</div>
            <div className="balance-icon">{price * itemCounter.value}</div>
          </button>

          <button
            className='count-btn'
            style={{ display: itemCounter.isAdded ? 'block' : "none" }}
            onClick={() => setItemCounter(prev => ({ ...prev, value: prev.value + 1 }))}
          >
            +
          </button>
        </div>

      </div>
    </div>
  )
}

export default ShopItem