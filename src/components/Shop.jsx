import React, { useEffect, useRef, useState } from 'react'
import { shopItems } from '../shop-items'
import ShopItem from './ShopItem'
import { useDispatch, useSelector } from 'react-redux'
import { earn } from '../slices/balanceSlice'
import { store } from '../store/store'
import { addToInventory } from '../slices/inventorySlice'
import { addToTheShop } from '../slices/shopSlice'

const Shop = () => {
  const dispatch = useDispatch()
  const currentShopSelector = useSelector((store) => store.shop);

  const simpleThunk = async (dispatch, controller) => {
    try {
      const request = await fetch("http://localhost:3001/shopItems", {
        signal: controller.signal
      })
      const shopItems = await request.json()

      !currentShopSelector.length && shopItems
        .map(item => ({ ...item, id: crypto.randomUUID() }))
        .forEach(item => {
          dispatch(addToTheShop(item))
        })
    }
    catch (err) {
      if (err.name === 'AbortError') {
        return
      }
      else {
        throw err
      }
    }
  }


  useEffect(() => {
    let controller = new AbortController()
    simpleThunk(dispatch, controller)

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div className="shop" >
      {
        currentShopSelector.length === 0 ?
          (<div className="">loading...</div>)
          :
          (currentShopSelector.map(item => <ShopItem {...item} key={item.id} />))
      }
    </div>
  )
}

export default Shop