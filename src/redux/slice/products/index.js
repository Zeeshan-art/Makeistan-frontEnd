import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { addProduct, updateProduct, getAllProducts } from './thunk';

const initialState = {
    product: [],
    loading: false,
    isAddedProduct: false,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder.addCase( addProduct.pending, (state,action) => {
            state.loading = true;
        });
        builder.addCase( addProduct.fulfilled, (state,action) => {
            state.product = action.payload;
            toast.success("Product Added");
        });
        builder.addCase( addProduct.rejected, (state,action) => {
            state.loading = false;
        });

        // builder.addCase(updateProduct.pending, (state,action) => {
        //     state.loading = true;
        // });
        // builder.addCase(updateProduct.fulfilled, (state,action) => {
        //     state.product = action.payload
        //     state.loading = false;
        //     toast.success("Product Updated");
        // });
        // builder.addCase(updateProduct.rejected, (state,action) => {
        //     state.loading = false;
        // });

        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
          })
          .addCase(getAllProducts.fulfilled,(state, action) => {
            state.product = action.payload;
            state.loading = false;
          })
          .addCase(getAllProducts.rejected,(state, action) => {
            state.error = action.error;
            state.loading = false;
          })
    }
});

export default productSlice.reducer;