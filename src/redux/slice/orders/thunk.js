import { createAsyncThunk } from "@reduxjs/toolkit";

export const sellerOrders = createAsyncThunk("seller/orders", async ()=>{

    // try {
    //     const response = await fetch("http://localhost:5000/api/seller/orders",{
    //     method:"GET",
    //     headers:{
    //         "Content-Type": "application/json",
    //         jwtToken : `${localStorage.getItem('jwtToken')}`,
    //      },
    // })
    // const result = await response.json();
    // console.log("results:",result);
    // return result;
    // } catch (error) {
    //     console.log("Errors: " ,error);   
    // }
    
})