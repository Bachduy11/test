import axios from 'axios';
export const baseURL = "http://localhost:4000";
const axiosIinstance = axios.create({
    baseURL: baseURL
})
export default axiosIinstance