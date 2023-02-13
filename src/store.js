import { configureStore } from '@reduxjs/toolkit';
import authSlice from './redux/slice/seller/index';
import productSlice from './redux/slice/products/index';
import orderSlice from './redux/slice/orders/index';

 const store = configureStore({
    reducer:{
        seller: authSlice,
        product: productSlice ,
        orders: orderSlice
    }
 })

 export default store;