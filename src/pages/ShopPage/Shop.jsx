import React, { useEffect } from 'react'
import ShopItem from './ShopItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import ShopCardCreator from './ShopCardCreator.jsx'
import { initializeShopItems } from './shop.slice.js'
import { resetSpendStatusToInicial } from '../../balanceLogic/balance.slice.js'
import ShopLoader from './ShopLoader.jsx'


const Shop = () => {
  const dispatch = useDispatch()
  const currentShopItemsStatus = useSelector(store => store.shop.items);
  const errorRequestData = useSelector(store => store.shop.error)
  const canSpendBalance = useSelector(store => store.balance.canSpend)

  const handleAnimationEnd = (e) => {
    e.target.style.animation = ""
    dispatch(resetSpendStatusToInicial())
  }
  
  useEffect(() => {
    if(currentShopItemsStatus.length === 0){
      dispatch(initializeShopItems())
    }
    dispatch(resetSpendStatusToInicial())
  }, [dispatch])


  if (errorRequestData) {
    return <>Have an error, please try later</>
  }

  return (
    <div className="shop">
      <ShopLoader/>
      {
        currentShopItemsStatus.length === 0
          ?
          <div className="">Shop is empty,  please try later</div>
          :
          <>
            {
              currentShopItemsStatus.map(item => <ShopItem {...item} key={item.id} />)
            }
            <ShopCardCreator />
          </>
      }
      <div className='balance__not-enough-notation' 
        onAnimationEnd={handleAnimationEnd}
        style={{ animation: canSpendBalance ? "" : "show-notation 2s"  }}
      >
        insufficient funds
      </div>
    </div>
  )
}

export default Shop