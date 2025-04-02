import { createSlice } from "@reduxjs/toolkit"

export const balance = createSlice({
    name: "balance",
    initialState: {
        value: 1000
    },
    reducers: {
        earn: (state) => {
            state.value += 1;
        },
        spend: (state, action) => {
            if(state.value >= action.payload.cost){
                state.value -= action.payload.cost
            }
        },
        restore: (state, action) => {
            state.value += action.payload
        }
    }
})

export default balance.reducer
export const {earn, spend, restore} = balance.actions
