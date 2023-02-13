import { createSlice } from "@reduxjs/toolkit";
import { sellerOrders } from "./thunk";

const initialState = {
    orders: [],
    loading: false
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducer:{},
    extraReducers: builder =>{
        builder.addCase(sellerOrders.pending, state => {
            state.loading = true;
        });
        builder.addCase(sellerOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.seller = action.payload;

            //console.log("seller Data:", state.seller);
            
        });
        builder.addCase(sellerOrders.rejected, state => {
            state.loading = false;
        });  
    } 
})

export default orderSlice.reducer;