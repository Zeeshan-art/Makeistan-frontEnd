import React from "react";
import './styles.css'
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

    //const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;

    const onSubmit = async (data) => {

        console.log(data);
        
        try {
            
            localStorage.setItem('login',true)
            dispatch(sellerLogin(data))
            navigate("/");
            toast.success("Successfully login");
            //navigate("/sellerLogin");
            
        } catch (error) {
            console.log(error);
    
        }
    }

    

    // const onSubmit = async (data) => {

    //     try {
    //         const res = await fetch("http://localhost:5000/api/seller/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(
    //                 data
    //             ),
    //         });

    //         const results = await res.json();

    //         if (results.jwtToken){
    //             localStorage.setItem("jwtToken", results.jwtToken);
    //             toast.success("Successfully Login")
    //             navigate("/");
    //         }

    //     } catch (error) {
    //         console.error(error);
    //         window.alert("Wrong Credentials");
    //     }

    // };

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
                            className="regInput"
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
                            className="regInput"
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
                            className="main-button"
                            value="Submit"
                        ></input>
                    </form>
                    <span>Click here to <Link to="/sellerSignup">SignUp</Link></span>
                    
                </div>
            </div>
        </>
    );
}

export default Login;