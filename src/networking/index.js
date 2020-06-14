import axios from 'axios';
import config from "../../config";
import endpoints from "../constants/endpoints";

const axiosInstance = axios.create({
    baseURL: config.url,
    timeout: 30000,
});

export const getTweetById = () => {
    return axiosInstance.get(endpoints);
}

export const getAllTweets = () => {
    
}
