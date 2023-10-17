import { createSlice } from "@reduxjs/toolkit";

const CoinSlice = createSlice({
    name: 'coins',
    initialState:{
        coins:null,
    },
    reducers:{
        addCoins:(state, action) =>{
            state.coins=action.payload;
        }
    }
})

export const {addCoins} = CoinSlice.actions;

export default CoinSlice.reducer;