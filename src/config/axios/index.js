import axios from "axios";

// let token = localStorage.getItem("token");
// REACT_APP_API_BASE_URL_LOCAL
// var baseURL = process.env.REACT_APP_API_BASE_URL
var baseURL = "http://localhost:5001"

console.log("baseURL", baseURL);
const axiosInstance = axios.create({
  baseURL,
  // headers: { "x-access-token": token },
});

axiosInstance.interceptors.request.use((config) => {
  // console.log("config", config)
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    //console.log("response.data", response.data);
    return response.data;
  },
  (error) => {
    console.log("error?.response", error?.response);
    return Promise.reject(error?.response);
  }
);

export default axiosInstance;
