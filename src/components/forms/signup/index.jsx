import React from "react";
import '../authStyles.css'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sellerSignUp } from "../../../redux/slice/seller/thunk";


const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    //const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;

    const onSubmit = async (data) => {
        //console.log(data);

        try {
            

            dispatch(sellerSignUp(data))
            navigate("/sellerLogin");
            toast.success("Successfully Signup");

        } catch (error) {
            console.log(error);

        }
    };

    return (
        <>
            <div className="main-form">
                <div className="form-inner">
                    <h1>Seller Sign Up</h1>

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
                            })}
                        />

                        {errors?.email?.type === "required" && <p>This field is required</p>}
                        {errors?.email?.type === "minLength" && <p>Password must be at least 8 characters</p>}
                        {errors?.email?.type === "pattern" && <p>Email pattern is wrong</p>}
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
                                // pattern: {
                                //     value: passwordRegex,
                                // }
                            })}
                        />
                        {errors?.password?.type === "required" && <p>This field is required</p>}
                        {errors?.password?.type === "minLength" && <p>Password must be at least 8 characters</p>}
                        {/* {errors?.password?.type === "pattern" && <p> Password must contain lowercase, uppercase letter & number</p>} */}
                        <br />
                        <label className="labelReg">
                            Profile Image <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input
                            type="text"
                            name="img"
                            //accept="image/*" 
                            className="regInputPurple"
                            {...register("profilePicture", {
                                // required: "Input is required"

                            })}
                        />
                        {/* {errors.profileImage && <p>{errors.profileImage.message}</p>} */}
                        <br />
                        <label className="labelReg">
                            Full Name <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input

                            name="fullName"
                            type="text"
                            className="regInputPurple"
                            {...register("fullName", {
                                required: "This field is required"
                            })}
                        />
                        {errors.fullName && <p>{errors.fullName.message}</p>}
                        <br />
                        <label className="labelReg">
                            Mobile NUmber
                            <span className="rsymbol">
                                *
                            </span>{" "}
                        </label>
                        <br />
                        <input
                            name="phonenumber"
                            type="tel"
                            className="regInputPurple"
                            {...register("mobileNumber", {
                                required: true,

                                minLength: 11,
                                maxLength: 11
                            })}
                        />
                        {errors?.mobileNumber?.type === "required" && <p>This field is required</p>}
                        {errors?.mobileNumber?.type === "minLength" && <p>Length must be 11</p>}
                        {errors?.mobileNumber?.type === "maxLength" && <p>Length must be 11</p>}
                        <br />
                        <label className="labelReg">
                            CNIC Number
                            <span className="rsymbol">
                                *
                            </span>{" "}
                        </label>
                        <br />
                        <input
                            name="CNIC"
                            className="regInputPurple"
                            {...register("CNIC", {
                                required: true,
                                pattern: /\d+/,
                                minLength: 13,
                                maxLength: 13
                            })}
                        />
                        {errors?.CNIC?.type === "required" && <p>This field is required</p>}
                        {errors?.CNIC?.type === "pattern" && <p>CNIC must be in digits</p>}
                        {errors?.CNIC?.type === "minLength" && <p>Length must be 13</p>}
                        {errors?.CNIC?.type === "maxLength" && <p>Length must be 13</p>}
                        <br />
                        <label className="labelReg">
                            Address
                            <span className="rsymbol">
                                *
                            </span>{" "}
                        </label>
                        <br />
                        <input

                            name="address"
                            className="regInputPurple"
                            {...register("address", {
                                required: true

                            })}
                        />
                        {errors?.address?.type === "required" && <p>This field is required</p>}
                        <br />
                        <label className="labelReg">
                            Shop Name
                            <span className="rsymbol">
                                *
                            </span>{" "}
                        </label>
                        <br />
                        <input
                            name="shopName"
                            className="regInputPurple"
                            {...register("shopName", {
                                required: true
                            })}
                        />
                        {errors?.shopName?.type === "required" && <p>This field is required</p>}
                        <br />
                        <label className="labelReg">
                            CNIC Picture
                            <span className="rsymbol">
                                *
                            </span>{" "}
                        </label>

                        <input
                            type="text"
                            name="img"
                            //accept="image/*" 
                            className="regInputPurple"
                            {...register("cnicPicture", {
                                required: "This field is required"

                            })}
                        />
                        {errors.cnicPicture && <p>{errors.cnicPicture.message}</p>}
                        <br />
                        <input
                            type="submit"
                            name="addProduct"
                            id="addProduct"
                            className="purple-button"
                            value="Submit"
                        ></input>
                    </form>
                    <div className="sign-up">Click here to <Link to="/sellerLogin">Login</Link></div>
                </div>
            </div>
        </>
    );
}

export default SignUp;