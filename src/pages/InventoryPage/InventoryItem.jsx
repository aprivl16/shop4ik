import React from 'react'
import { useDispatch } from 'react-redux'
import { restore } from '../../balanceLogic/balance.slice'
import { removeFromInventory } from './inventory.slice'

const InventoryItem = ({cost, img, title, id, countAddedItems}) => {
  const dispatch = useDispatch()

  return (
    <div className="inventory__wrapper">
      
        <h3 className='inventory-item__title'>{title}</h3>
        <div className="inventory-item__img-container">
            <img src={img} alt="" />
        </div>
        <div className="inventory-item__price">{cost * countAddedItems + ' $'}</div>
        <div className="inventory-item__count" style={{display: countAddedItems === 1 ? "none" : "block"}}>{countAddedItems === 1 ? "": 'x'+ countAddedItems}</div>
        <button className='inventory-item__sell' onClick={() => {
          dispatch(restore(cost * countAddedItems))
          dispatch(removeFromInventory(id))
        }}>Sell all</button>
    </div>
  )
}

export default InventoryItem