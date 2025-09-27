import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// Attach token to every request automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // get token from localStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`; // add token to request header
  }
  return req;
});

export default API;
