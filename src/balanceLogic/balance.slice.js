import { createSlice } from "@reduxjs/toolkit"

export const balance = createSlice({
    name: "balance",
    initialState: {
        value: 1000,
        canSpend: true,
    },
    reducers: {
        earn: (state) => {
            state.value += 1;
        },
        spend: (state, action) => {
            if(state.value >= action.payload.cost){
                state.canSpend = true;
                state.value -= action.payload.cost
            }
            else{
                state.canSpend = false;
            }
        },
        resetSpendStatusToInicial: state => {
            state.canSpend = true
        },
        restore: (state, action) => {
            state.value += action.payload
        }
    }
})

export default balance.reducer
export const {earn, spend, restore, resetSpendStatusToInicial} = balance.actions
