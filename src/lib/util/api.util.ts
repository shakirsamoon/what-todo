import axios from "axios";
import { HOST_URL } from "@constants/api_paths";

/**
 * Initialize Axios
 *
 */
const axiosInstance = axios.create({
  baseURL: HOST_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosInstance;
