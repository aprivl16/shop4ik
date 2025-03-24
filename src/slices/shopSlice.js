import { createSlice } from "@reduxjs/toolkit"

export const shop = createSlice({
    name: "shop",
    initialState: [],
    reducers: {
        addToTheShop: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default shop.reducer
export const {addToTheShop} = shop.actions