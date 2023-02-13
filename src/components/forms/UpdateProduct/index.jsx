//import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
//import Modal from '../../Modal/UpdateProductModal'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../redux/slice/products/thunk";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    overflowY: 'auto',
    height: "calc(130vh - 210px)",

};

const UpdateProduct = (props) => {

    const dispatch = useDispatch();
    const [products, setNewProducts] = useState(props.product);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues: props.product});



    //console.log(id);
    const onSubmit = async (data) => {
        const id = props.product.productId;
        console.log(id);
        try {
            dispatch(updateProduct(id))
            // const res = await fetch(`http://localhost:5000/api/seller/product/${id}`, {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //         jwtToken: `${localStorage.getItem('jwtToken')}`,
            //     },
            //     body: JSON.stringify(
            //         data
            //     ),
            // });

            // const results = await res.json();

            // console.log(setNewProducts(results));
            // if (res.status === 422 || !results) {
            //     window.alert("Something Went Wrong");
            // } else {
            //     window.alert("Product Updated Successfully");
            // }

        } catch (error) {
            console.error(error);
        }

    };

    useEffect(()=>{
        setNewProducts()
    },[products])
    return (
        <>
            <div>
                {/* <Button style={{ backgroundColor: 'black' }} onClick={handleOpen}>Update</Button> */}
                <Button className="btn" onClick={handleOpen}>Update</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
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
                                                    maxLength: 200
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
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </div>

        </>
    );
}

export default UpdateProduct;
























// const UpdateProduct = () => {

//     const {products, loading} = useSelector((state) => state.products);
//     const dispatch = useDispatch();

//     //const [products, setNewProducts] = useState(props.product);
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm({ defaultValues: products});



//     //console.log(id);
//     const onSubmit = async (data) => {

//        // dispatch(updateProduct(data))
//         // const id = props.product.productId;
//         // console.log(id);
//         // try {
//         //     const res = await fetch(`http://localhost:5000/api/seller/product/${id}`, {
//         //         method: "PUT",
//         //         headers: {
//         //             "Content-Type": "application/json",
//         //             jwtToken: `${localStorage.getItem('jwtToken')}`,
//         //         },
//         //         body: JSON.stringify(
//         //             data
//         //         ),
//         //     });

//         //     const results = await res.json();

//         //     console.log(setNewProducts(results));
//         //     if (res.status === 422 || !results) {
//         //         window.alert("Something Went Wrong");
//         //     } else {
//         //         window.alert("Product Updated Successfully");
//         //     }

//         // } catch (error) {
//         //     console.error(error);
//         // }

//     };

//     // useEffect(()=>{
//     //     setNewProducts()
//     // },[products])

//     if (loading){
//         return <h2>Loading...</h2>
//     }
//     return (
//         <>
//             <div>
//                 <Button style={{ backgroundColor: 'black' }} onClick={handleOpen}>Update</Button>
//                 <Modal
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description"
//                 >
//                     <Box sx={style}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={8}>
//                                 <div className="main-form">
//                                     <div className="form-inner">
//                                         <h1>Enter Product Details</h1>

//                                         <form onSubmit={handleSubmit(onSubmit)}>
//                                             <label className="labelReg">
//                                                 Product Name <span className="rsymbol">*</span>{" "}
//                                             </label>
//                                             <br />
//                                             <input
//                                                 name="name"
//                                                 className="regInput"
//                                                 {...register("name", {
//                                                     required: true,
//                                                 })}
//                                             />

//                                             {errors?.name?.type === "required" && <p>This field is required</p>}
//                                             <br />
//                                             <label className="labelReg">
//                                                 Description <span className="rsymbol">*</span>{" "}
//                                             </label>
//                                             <br />
//                                             <textarea
//                                                 name="description"
//                                                 type="text"
//                                                 className="regInput"
//                                                 {...register("description", {
//                                                     required: true,
//                                                     minLength: 5,
//                                                     maxLength: 200
//                                                 })}
//                                             />
//                                             {errors?.description?.type === "required" && <p>This field is required</p>}
//                                             {errors?.description?.type === "minLength" && <p>length should be min 5 and max 200</p>}
//                                             {errors?.description?.type === "maxLength" && <p>length should be min 5 and max 200</p>}
//                                             <br />

//                                             <label className="labelReg">
//                                                 Product Image <span className="rsymbol">*</span>{" "}
//                                             </label>
//                                             <br />
//                                             <input
//                                                 type="text"
//                                                 name="img"
//                                                 //accept="image/*" 
//                                                 className="regInput"
//                                                 {...register("image", {
//                                                     required: true

//                                                 })}
//                                             />
//                                             {errors?.description?.type === "required" && <p>This field is required</p>}
//                                             <br />
//                                             <label className="labelReg">
//                                                 Unit Price<span>(Rs)</span> <span className="rsymbol">*</span>{" "}
//                                             </label>
//                                             <br />
//                                             <input
//                                                 name="unitPrice"
//                                                 className="regInput"
//                                                 {...register("unitPrice", {
//                                                     required: true,
//                                                     pattern: /\d+/
//                                                 })}
//                                             />
//                                             {errors?.unitPrice?.type === "required" && <p>This field is required</p>}
//                                             {errors?.unitPrice?.type === "pattern" && <p>Enter unitPrice in Rs</p>}
//                                             <br />
//                                             <label className="labelReg">
//                                                 stockQuantity <span className="rsymbol">*</span>{" "}
//                                             </label>
//                                             <br />
//                                             <input
//                                                 name="stockQuantity"
//                                                 className="regInput"
//                                                 {...register("stockQuantity", {
//                                                     required: true,
//                                                     pattern: /\d+/
//                                                 })}
//                                             />
//                                             {errors?.stockQuantity?.type === "required" && <p>This field is required</p>}
//                                             {errors?.stockQuantity?.type === "pattern" && <p>stockQuantity should be in numbers</p>}
//                                             <br />

//                                             <label className="labelReg">
//                                                 Weight <span> (kg) </span> <span className="rsymbol">*</span>{" "}
//                                             </label>
//                                             <br />
//                                             <input
//                                                 name="weight"
//                                                 className="regInput"
//                                                 {...register("weight", {
//                                                     required: true,
//                                                     pattern: /\d+/
//                                                 })}
//                                             />
//                                             {errors?.weight?.type === "required" && <p>This field is required</p>}
//                                             {errors?.weight?.type === "pattern" && <p>Weight should be in numbers</p>}
//                                             <br />


//                                             <br />
//                                             <label className="labelReg">
//                                                 Sub Cetagory ID <span className="rsymbol">*</span>{" "}
//                                             </label>
//                                             <br />
//                                             <input

//                                                 name="subcategoryId"
//                                                 className="regInput"
//                                                 {...register("subcategoryId", {
//                                                     required: true
//                                                 })}
//                                             />
//                                             {errors?.subcategoryId?.type === "required" && <p>This field is required</p>}
//                                             <br />

//                                             <input
//                                                 type="submit"
//                                                 name="addProduct"
//                                                 id="addProduct"
//                                                 className="main-button"
//                                                 value="Submit"
//                                             ></input>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Modal>
//             </div>

//         </>
//     );
// }

// export default UpdateProduct;

