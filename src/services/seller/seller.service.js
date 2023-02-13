import API from "../../configs/axios.config";

const sellerLoginService = async (data) => {
    const { email, password } = data
    // console.log("data: ", data);  
    return await API.post("/login", { email, password });
};
const sellerSignUpService = async (data) => {
    // console.log("data: ", data);
    const { profilePicture, email, fullName, CNIC,
        mobileNumber, address, shopName, cnicPicture, password} = data;

    return await API.post("/signup", {
        profilePicture, email, fullName, CNIC,
        mobileNumber, address, shopName, cnicPicture, password
    });
};

const sellerProfileService = async () => {
    
    const res= await API.get("/sellerProfile");
    console.log(res.data);
    return res;
};

export { sellerLoginService, sellerSignUpService,sellerProfileService };