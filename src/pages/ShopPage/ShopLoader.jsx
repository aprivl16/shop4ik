import React from 'react'
import Loader from '../../shared/Loader'
import { useSelector } from 'react-redux'


const ShopLoader = () => {
   const loading = useSelector(store => store.shop.loading)
   if (loading) {
      return (
         <Loader />
      )
   }
}

export default ShopLoader