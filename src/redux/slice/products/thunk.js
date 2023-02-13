import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductService, updateProductService,getAllProductService } from "../../../services/seller/product.service";


export const addProduct = createAsyncThunk("seller/addProduct", async (data) => {
    try {
      const response = await addProductService(data);
     console.log("res: ", response);
      return response.data;
    } catch (error) {
      return console.error(error);
    }
  });

  export const getAllProducts = createAsyncThunk(
    "seller/product",
    async () => {
        console.log("here");
      try {
        const response = await getAllProductService();
        return response.data;
      } catch (error) {
        console.log("error",error);
      }
    }
  );

  export const updateProduct = createAsyncThunk("seller/updateProduct", async (data,id) => {
    try {
      const response = await updateProductService(data,id);
     console.log("res: ", response);
      return response.data;
    } catch (error) {
      return console.error(error);
    }
  });