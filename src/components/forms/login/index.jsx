import React from "react";
import '../authStyles.css'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';

import {useDispatch} from "react-redux"; 
import { sellerLogin } from "../../../redux/slice/seller/thunk";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;

    const onSubmit = async (data) => {

        //console.log(data);
        
        try {
            
            const res = await dispatch(sellerLogin(data));
            if ( res ){
                navigate("/");
                console.log(" something ");

            }
            
        } catch (error) {
            console.error("Login Error: ",error.message);    
        }
    }

    return (
        <>
            <div className="main-form">
                <div className="form-inner">
                    <h1>Seller Login</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <label className="labelReg">
                            Email
                            <span className="rsymbol">
                                *
                            </span>{" "}
                        </label>
                        <br />
                        <input
                            name="email"
                            type="email"
                            className="regInputPurple"
                            {...register("email", {
                                required: "This field is required",
                                pattern: /\S+@\S+\.\S+/,
                                // pattern: {
                                //     value: emailRegex,
                                // }

                            })}
                        />

                        {errors?.email?.type === "required" && <p>This field is required</p>}
                        {/* {errors?.email?.type === "minLength" && <p>Password must be at least 8 characters</p>} */}
                        < br />
                        <label className="labelReg">
                            Password
                            <span className="rsymbol">
                                *
                            </span>{" "}
                        </label>
                        <br />
                        <input
                            name="password"
                            type="password"
                            className="regInputPurple"
                            {...register("password", {
                                required: true,
                                minLength: 8,
                                pattern: {
                                    value: passwordRegex,
                                }
                            })}
                        />
                        {errors?.password?.type === "required" && <p>This field is required</p>}
                        {errors?.password?.type === "minLength" && <p>Password must be at least 8 characters</p>}
                        {errors?.password?.type === "pattern" && <p> Password must contain lowercase, uppercase letter & number</p>}
                        <br />

                        <input
                            type="submit"
                            name="addProduct"
                            id="addProduct"
                            className="purple-button"
                            value="Submit"
                        ></input>
                    </form>
                </div>
                    <div className="sign-up">Click here to <Link to="/sellerSignup">SignUp</Link></div>
            </div>
        </>
    );
}

export default Login;