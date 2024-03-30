import axios from "axios";

export default axios.create({
    baseURL: 'https://backend-systems.onrender.com',
    withCredentials: true
});
