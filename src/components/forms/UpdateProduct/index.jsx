import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateProduct = (props) => {

    const [newProducts, setNewProducts] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    

    //console.log(id);
    const onSubmit = async (data) => {
        const id = props.id;
        console.log(id);
        try {
            const res = await fetch(`http://localhost:5000/api/seller/product/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    jwtToken : `${localStorage.getItem('jwtToken')}`,
                },
                body: JSON.stringify(
                    data
                ),
            });

            const results = await res.json();
            console.log(results);
            if (res.status === 422 || !results) {
                window.alert("Something Went Wrong");
            } else {
                window.alert("Product Updated Successfully");
            }

        } catch (error) {
            console.error(error);
        }

    };

    return (
        <>
            <div className="main-form">
                <div className="form-inner">
                    <h1>Enter Product Details</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="labelReg">
                            Product Name <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input
                            name="name"
                            className="regInput"
                            {...register("name", {
                                required: true,
                            })}
                        />

                        {errors?.name?.type === "required" && <p>This field is required</p>}
                        <br />
                        <label className="labelReg">
                            Description <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <textarea
                            name="description"
                            type="text"
                            className="regInput"
                            {...register("description", {
                                required: true,
                                minLength: 5,
                                maxLength:200
                            })}
                        />
                        {errors?.description?.type === "required" && <p>This field is required</p>}
                        {errors?.description?.type === "minLength" && <p>length should be min 5 and max 200</p>}
                        {errors?.description?.type === "maxLength" && <p>length should be min 5 and max 200</p>}
                        <br />

                        <label className="labelReg">
                            Product Image <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input
                            type="text"
                            name="img"
                            //accept="image/*" 
                            className="regInput"
                            {...register("image", {
                                required: true

                            })}
                        />
                        {errors?.description?.type === "required" && <p>This field is required</p>}
                        <br />
                        <label className="labelReg">
                            Unit Price<span>(Rs)</span> <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input
                            name="unitPrice"
                            className="regInput"
                            {...register("unitPrice", {
                                required: true,
                                pattern: /\d+/
                            })}
                        />
                        {errors?.unitPrice?.type === "required" && <p>This field is required</p>}
                        {errors?.unitPrice?.type === "pattern" && <p>Enter unitPrice in Rs</p>}
                        <br />
                        <label className="labelReg">
                            stockQuantity <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input
                            name="stockQuantity"
                            className="regInput"
                            {...register("stockQuantity", {
                                required: true,
                                pattern: /\d+/
                            })}
                        />
                        {errors?.stockQuantity?.type === "required" && <p>This field is required</p>}
                        {errors?.stockQuantity?.type === "pattern" && <p>stockQuantity should be in numbers</p>}
                        <br />

                        <label className="labelReg">
                            Weight <span> (kg) </span> <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input
                            name="weight"
                            className="regInput"
                            {...register("weight", {
                                required: true,
                                pattern: /\d+/
                            })}
                        />
                        {errors?.weight?.type === "required" && <p>This field is required</p>}
                        {errors?.weight?.type === "pattern" && <p>Weight should be in numbers</p>}
                        <br />


                        <br />
                        <label className="labelReg">
                            Sub Cetagory ID <span className="rsymbol">*</span>{" "}
                        </label>
                        <br />
                        <input

                            name="subcategoryId"
                            className="regInput"
                            {...register("subcategoryId", {
                                required: true
                            })}
                        />
                        {errors?.subcategoryId?.type === "required" && <p>This field is required</p>}
                        <br />

                        <input
                            type="submit"
                            name="addProduct"
                            id="addProduct"
                            className="main-button"
                            value="Submit"
                        ></input>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateProduct;

