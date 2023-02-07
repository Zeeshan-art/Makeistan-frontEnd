 import { createSlice } from "@reduxjs/toolkit"
import { sellerSignUp, sellerLogin } from "./thunk"


const initialState = {
    msg: "",
    seller: "",
    token: "",
    loading: false,
    error: ""
}

const authSlice = createSlice({
    name: "seller",
    initialState,
    reducers: {

        // addToken:(state,action)=>{
        //     state.token= localStorage.getItem("jwtToken");
        // },
        // addSeller:(state,action)=>{
        //     state.seller= localStorage.getItem("seller");
        // },
        // logout:(state,action)=>{
        //     state.token= null;
        //     localStorage.clear();
        // }

    },

    extraReducers: {

        [sellerSignUp.pending]: (state, error) => {
            state.loading = true
        },
        [sellerSignUp.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.msg = msg;
            }
        },
        [sellerSignUp.rejected]: (state, error) => {
            state.loading = true;

            if (error.status === 404) {
                alert("Email is already exist..");
            }
        },

        [sellerLogin.pending]: (state, error) => {
            state.loading = true
        },
        [sellerLogin.fulfilled]: (state, { payload: { error, msg, token, seller } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                // state.msg = msg;
                // state.token = token;
                // state.seller = seller;

                // localStorage.setItem("jwtToken",token);
                // localStorage.setItem("seller",JSON.stringify(seller));
                // localStorage.setItem("msg",msg);
            }
        },
        [sellerLogin.rejected]: (state, error) => {
            state.loading = true

            if (error.status === 401) {
                alert("Authorization Failed...");
            }
        }
    }
    // extraReducers: builder => {

    //     builder.addCase(sellerSignUp.pending, state => {
    //         state.loading = true
    //     });
    //     builder.addCase(sellerSignUp.fulfilled, (state, action) => {
    //         state.loading = false;
    //         localStorage.setItem("seller", JSON.stringify(action.payload));
    //         localStorage.setItem("token", JSON.stringify(action?.payload?.token));
    //         return { ...action.payload, isLoading: false };
    //       });
    //     builder.addCase(sellerSignUp.rejected, state=> {
    //         state.loading = true;
    //         localStorage.removeItem("seller");
    //         localStorage.removeItem("token");
    //         return initialState;
    //     });
    //     builder.addCase(sellerLogin.pending, state => {
    //         state.loading = true
    //     });
    //     builder.addCase(sellerLogin.fulfilled, (state, action) => {
    //         state.loading = false
    //         localStorage.setItem("seller", JSON.stringify(action.payload));
    //         localStorage.setItem("token", JSON.stringify(action?.payload?.token));

    //         return { ...action.payload, isLoading: false };
    //         // if (error) {
    //         //     state.error = error
    //         // } else {
    //         //     // state.msg = msg,
    //         //     // state.token = token,
    //         //     // state.seller = seller,

    //         //     // localStorage.setItem("jwtToken",token);
    //         //     // localStorage.setItem("seller",JSON.stringify(seller));
    //         // }
    //     });
    //     builder.addCase(sellerLogin.rejected, state => {
    //         state.loading = true

    //         return initialState;
    //     });

});

//export const {addToken,addSeller,logut} = authSlice.actions;
export default authSlice.reducer;