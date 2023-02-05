import { configureStore } from '@reduxjs/toolkit';
import authSlice from './redux/slice/seller/index';

 const store = configureStore({
    reducer:{
        seller: authSlice,
    }
 })

 export default store;