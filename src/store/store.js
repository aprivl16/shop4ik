import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../balanceLogic/balance.slice'
import invenoryReducer from '../pages/InventoryPage/inventory.slice'
import shopReducer from '../pages/ShopPage/shop.slice'

export const store = configureStore({
    reducer: {
        "balance": balanceReducer,
        "inventory": invenoryReducer,
        "shop": shopReducer
    }
})


