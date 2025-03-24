import { createSlice, current } from "@reduxjs/toolkit";
import { spend } from "./balanceSlice";
import { useSelector } from "react-redux";
import { store } from "../store/store";

export const inventory = createSlice({
    name: 'inventory',
    initialState: [],
    reducers: {
        addToInventory: (state, action) => {
            const {price, img, title, currentBalance, quantity} = action.payload;
            const boughtItem = state.find(item => item.title === title)
            if(boughtItem && currentBalance >= price){
                boughtItem.count += quantity
            }
            else if(currentBalance >= price ){
                state.push({price, img, title, count: 1})
            }
        },
        removeFromInventory: (state, action) => {
            const index = state.findIndex((item) => item.title === action.payload)
            state.splice(index, 1)
        }
    }
}) 


export default inventory.reducer
export const {addToInventory, removeFromInventory} = inventory.actions