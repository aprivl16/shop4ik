import { createSlice } from "@reduxjs/toolkit";

export const inventory = createSlice({
    name: 'inventory',
    initialState: [],
    reducers: {
        addToInventory: (state, action) => {
            const {cost, img, title, currentBalance, numOfNewShopItems, id} = action.payload;
            const purchasedItem = state.find(item => item.id === id)
            if(purchasedItem && currentBalance >= cost){
                purchasedItem.countAddedItems += numOfNewShopItems
            }
            else if(currentBalance >= cost ){
                state.push({cost, img, title, id, countAddedItems: 1})
            }
        },
        removeFromInventory: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload)
            state.splice(index, 1)
        }
    }
}) 


export default inventory.reducer
export const {addToInventory, removeFromInventory} = inventory.actions