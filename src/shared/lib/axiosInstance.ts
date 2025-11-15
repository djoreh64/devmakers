import axios from "axios";
import { apiUrl } from "./constants";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
