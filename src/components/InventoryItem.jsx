import React from 'react'
import { useDispatch } from 'react-redux'
import { restore } from '../slices/balanceSlice'
import { removeFromInventory } from '../slices/inventorySlice'

const InventoryItem = ({img, price, title, count}) => {
  const dispatch = useDispatch()
  return (
    <div className="inventory__wrapper">
      
        <h3 className='inventory-item__title'>{title}</h3>
        <div className="inventory-item__img-container">
            <img src={img} alt="" />
        </div>
        <div className="inventory-item__price">{price * count + ' $'}</div>
        <div style={{display: count === 1 ? "none" : "block"}}className="inventory-item__count">{count === 1 ? false: 'x'+ count}</div>
        <button className='inventory-item__sell' onClick={() => {
          dispatch(restore(price * count))
          dispatch(removeFromInventory(title))
        }}>Sell all</button>
    </div>
  )
}

export default InventoryItem