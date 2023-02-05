import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const sellerLogin = createAsyncThunk("seller/login",async (body)=>{
    const response = await fetch("http://localhost:5000/api/seller/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
         },
        body: JSON.stringify(body)
    })
    const result = await response.json();
    if(result.jwtToken){toast.success("login succesfully")
        localStorage.setItem("jwtToken", result.jwtToken)
        return result;
    }
   

  // console.log("results:",result)
    

    // console.log(result.jwtToken)
    // if (result.jwtToken){
    //     localStorage.setItem("jwtToken", result.jwtToken);
    //     return result;
    // }

})

export const sellerSignUp = createAsyncThunk("seller/signup",async (body)=>{
    const response = await fetch("http://localhost:5000/api/seller/signup",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
         },
        body: JSON.stringify(body)
    })
    const result = response.json();
    console.log("results:",result);
    return result;
})