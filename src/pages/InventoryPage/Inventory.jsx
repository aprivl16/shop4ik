import React from 'react'
import { useSelector } from 'react-redux'
import InventoryItem from './InventoryItem'
import { Link } from 'react-router-dom'

const Inventory = () => {
  const inventoryItems = useSelector(store => store.inventory);

  return (
    <div className='inventory' style={{ display: inventoryItems.length ? 'grid' : 'block' }}>
      {
        inventoryItems.length ? (inventoryItems.map(item => <InventoryItem {...item} key={item.id}/>))
          :
          <div className="without-inventory-items">
            <div>You buy nothing yet, go to the <Link to='/shop'>Shop</Link> and try to buy something</div>
            <img src="doubt-smile-no-bg.png" alt="" width={200} height={200} />
          </div>
      }

    </div>
  )
}

export default Inventory