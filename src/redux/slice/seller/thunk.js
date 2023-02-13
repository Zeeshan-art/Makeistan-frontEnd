import { createAsyncThunk } from "@reduxjs/toolkit";
import { sellerLoginService, sellerSignUpService, sellerProfileService } from "../../../services/seller/seller.service";

export const sellerLogin = createAsyncThunk("seller/login", async (data) => {
    try {
      const response = await sellerLoginService(data);
      return response.data;
    } catch (error) {
      return console.error(error);
    }
  });

// export const sellerLogin = createAsyncThunk("seller/login", async (body) => {
//     const response = await fetch("http://localhost:5000/api/seller/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body)
//     })
//     const result = await response.json();
//     return result;
// })

export const sellerSignUp = createAsyncThunk("seller/signup", async (data) => {
    try {
      const response = await sellerSignUpService(data);
      // console.log("res: ", response);
      return response.data;
    } catch (error) {
      return console.error(error);
    }
  });
// export const sellerSignUp = createAsyncThunk("seller/signup", async (body) => {
//     const response = await fetch("http://localhost:5000/api/seller/signup", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body)
//     })
//     const result = await response.json();
//     console.log("results:", result);
//     return result;
// })

export const sellerProfile = createAsyncThunk("seller/sellerProfile", async () => {
    try {
      const response = await sellerProfileService();
      console.log("res: ", response);
      return response.data;
    } catch (error) {
      return console.error(error);
    }
  });
// export const sellerProfile = createAsyncThunk("seller/sellerProfile", async () => {
//     const response = await fetch("http://localhost:5000/api/seller/sellerProfile", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             jwtToken: `${localStorage.getItem('jwtToken')}`,
//         },
//         //body: JSON.stringify(body)
//     })
//     const result = await response.json();
//     console.log("results:", result);
//     return result;
// })