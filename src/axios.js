import axios from "axios";

// const baseURL = import.meta.env.VITE_APP_BASE_URL_UAT;
const baseURL = import.meta.env.VITE_APP_BASE_URL_PROD;

// console.log("base url =", baseURL);

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
