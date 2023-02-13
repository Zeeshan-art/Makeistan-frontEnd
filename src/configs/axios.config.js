import axios from "axios";

const token = localStorage.getItem("jwtToken");
const BASE_URL = "http://localhost:5000/api/seller";
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    jwtToken: `${token}`,
  },
});

export default API;
