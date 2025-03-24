import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../slices/balanceSlice'
import invenoryReducer from '../slices/inventorySlice'
import shopReducer from '../slices/shopSlice'

export const store = configureStore({
    reducer: {
        "balance": balanceReducer,
        "inventory": invenoryReducer,
        "shop": shopReducer
    }
})


