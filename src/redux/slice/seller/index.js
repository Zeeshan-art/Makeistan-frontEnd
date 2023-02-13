import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { sellerSignUp, sellerLogin, sellerProfile } from "./thunk"

const initialState = {
    seller: JSON.parse(localStorage.getItem("seller"))||null,
    loading: false,
    token: localStorage.getItem("jwtToken") || null,
}

const authSlice = createSlice({
    name: "seller",
    initialState,
    reducers: {},

    extraReducers: builder => {

        builder
        .addCase(
            sellerSignUp.pending, state => {
                state.loading = true;
            }
        )
        .addCase(
            sellerSignUp.fulfilled,  (state, action) =>{
                state.seller = action.payload;
                toast.success("Successfully registered");
            }
        )
        .addCase(
            sellerSignUp.rejected,  (state, action) =>{
                state.error = state.error.message
                toast.error(" Registeration Unsuccessful");
            }
        )
        // builder.addCase(sellerSignUp.pending, state => {
        //     state.loading = true;
        // });
        // builder.addCase(sellerSignUp.fulfilled, (state, action) => {
        //     state.seller = action.payload

        //     console.log(state.seller);
        //     state.loading = false;
        // });
        // builder.addCase(sellerSignUp.rejected, (state, action) => {
        //     state.loading = false;
        // });
        builder
            .addCase(sellerLogin.pending, state => {
                state.loading = true;
            })
            .addCase(sellerLogin.fulfilled, (state, action) => {
                const { jwtToken ,seller} = action.payload;
                state.token = jwtToken;
                state.seller = seller;
                //console.log("token",jwtToken);
                localStorage.setItem("seller", JSON.stringify(state.seller));
                localStorage.setItem("jwtToken", state.token);
                toast.success("Login Successful");
            })
            .addCase(sellerLogin.rejected, (state, action) => {
                state.seller = null;
                state.token = null;
                localStorage.removeItem("jwtToken");
                toast.error("Invalid Credential");
            });
        builder.addCase(sellerProfile.pending, state => {
            state.loading = true;
        });
        builder.addCase(sellerProfile.fulfilled, (state, action) => {
            state.seller = action.payload;
           

            console.log("seller Data:", state.seller );
            state.loading = false;
        });
        builder.addCase(sellerProfile.rejected, state => {
            state.loading = false;
        });


    }
});

//export const {addToken,addSeller,logut} = authSlice.actions;
export default authSlice.reducer;


// [sellerSignUp.pending]: (state, error) => {
        //     state.loading = true
        // },
        // [sellerSignUp.fulfilled]: (state,  {payload: { error, msg } }) => {
        //     state.loading = false;
        //     if (error) {
        //         state.error = error;
        //     } else {
        //         state.msg = msg;
        //     }
        // },
        // [sellerSignUp.rejected]: (state, error) => {
        //     state.loading = true;

        //     if (error.status === 404) {
        //         alert("Email is already exist..");
        //     }
        // },

    //     [sellerLogin.pending]: (state, error) => {
    //         state.loading = true
    //     },
    //     [sellerLogin.fulfilled]: (state, { payload: { error, msg, token, seller } }) => {
    //         state.loading = false;
    //         if (error) {
    //             state.error = error;
    //         } else {
    //             // state.msg = msg;
    //             // state.token = token;
    //             // state.seller = seller;

    //             // localStorage.setItem("jwtToken",token);
    //             // localStorage.setItem("seller",JSON.stringify(seller));
    //             // localStorage.setItem("msg",msg);
    //         }
    //     },
    //     [sellerLogin.rejected]: (state, error) => {
    //         state.loading = true

    //         if (error.status === 401) {
    //             alert("Authorization Failed...");
    //         }
    //     }
    // }
    // extraReducers: builder => {

    //     builder.addCase(sellerSignUp.pending, state => {
    //         state.loading = true
    //     });
    //     builder.addCase(sellerSignUp.fulfilled, (state, action) => {
    //         state.loading = false;
    //         localStorage.setItem("seller", JSON.stringify(action.payload));
    //         localStorage.setItem("token", JSON.stringify(action?.payload?.token));
    //         return { ...action.payload, isLoading: false };
    //     });
    //     builder.addCase(sellerSignUp.rejected, state => {
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

    // }