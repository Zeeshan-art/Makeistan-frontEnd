import API from "../../configs/axios.config";

const addProductService = async (data) => {
    // console.log("data: ", data);
    const { name, description, image, unitPrice, stockQuantity, weight,
        subcategoryId} = data;

    return await API.post("product/addProduct", {
        name, description, image, unitPrice, stockQuantity, weight,
        subcategoryId
    });
};

const getAllProductService = async () => {

    // console.log('here')
    const res = await API.get("/product");
    console.log("daatares",res.data);
    return res;
  };

const updateProductService = async (data,id) => {
    // console.log("data: ", data);
    const { name, description, image, unitPrice, stockQuantity, weight,
        subcategoryId} = data;

    return await API.put(`product/${id}`, {
        name, description, image, unitPrice, stockQuantity, weight,
        subcategoryId
    });
};

export { addProductService, updateProductService , getAllProductService };