import axios from "axios";

const API = axios.create({
  baseURL: "http://72.60.102.213:5000", // backend URL
  withCredentials: true
});

export default API;
