import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import { fetchAddShopItem, fetchGetShopItems } from "../../FetchData"

export const shop = createSlice({
    name: "shop",
    initialState: {
        items: [],
        loading: "idle",
        error: null
    },
    reducers: {
        addToTheShop: (state, action) => {
            state.items.push(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(initializeShopItems.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(initializeShopItems.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload !== 'aborted'){
                    action.payload
                    .map(item => ({...item, id: nanoid()}))
                    .forEach(item => {
                        state.items.push(item)
                    });
                }
            })
            .addCase(initializeShopItems.rejected, (state, action) => {
                state.error = true;
                if (action.payload === 'aborted') {
                    console.log('Request was aborted');
                  } else {
                    state.error = action.payload;
                    console.error('Error initializing shop items:', action.payload);
                  }
            })


            .addCase(addShopItemToStore.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })

    }
})

export const initializeShopItems = createAsyncThunk(
    "shop/initializeShopItems",
    async (_, { rejectWithValue, signal }) => {
        try{
            const shopItems = await fetchGetShopItems(signal)
            return shopItems
        }catch(err){
            console.log(err)
            rejectWithValue(err.message)
        }
    },
    {
        condition(_, {getState}){
            const loading = getState().shop.loading
            if(loading !== "idle"){
                return false
            }
        }
    }
)


export const addShopItemToStore = createAsyncThunk(
    "shop/addShopItemToStore",
    async (shopItemData, { rejectWithValue}) => {
        try{
            await fetchAddShopItem(shopItemData)
            return shopItemData
        }catch(err){
            console.log(err)
            rejectWithValue(err.message)
        }
    }
)

export default shop.reducer
export const { addToTheShop } = shop.actions
