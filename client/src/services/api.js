import axios from 'axios';
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) cfg.header.Authorization = `Bearer ${token}`;
    return cfg;
});

export default API;