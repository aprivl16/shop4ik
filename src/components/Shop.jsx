import React, { useEffect } from 'react'
import ShopItem from './ShopItem'
import { useDispatch, useSelector } from 'react-redux'
import { addToTheShop } from '../slices/shopSlice'
import { nanoid } from '@reduxjs/toolkit'

const Shop = () => {
  const dispatch = useDispatch()
  const currentShopStatus = useSelector(store => store.shop);
  const url = "http://localhost:3001/shopItems";

  const fetchShopItemsThunk = async (dispatch, controller) => {
    try {
      const request = await fetch(url, { signal: controller.signal });
      const shopItems = await request.json()

      currentShopStatus.length === 0 && shopItems
        .map(item => ({ ...item, id: nanoid() }))
        .forEach(item => {
          dispatch(addToTheShop(item))
        })
    }
    catch (err) {
      if (err.name === 'AbortError') {
        return
      }
      else {
        console.log(err.message)
      }
    }
  }


  useEffect(() => {
    let controller = new AbortController()
    fetchShopItemsThunk(dispatch, controller);

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div className="shop" >
      {
        currentShopStatus.length === 0
          ?
          <div className="">loading...</div>
          :
          currentShopStatus.map(item => <ShopItem {...item} key={item.id} />)
      }
    </div>
  )
}

export default Shop