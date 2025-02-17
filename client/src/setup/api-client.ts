import axios from "axios";
import { APP_CONFIG } from "./app-config";

export const API_CLIENT = axios.create({
    baseURL: APP_CONFIG.apiUrl,
});
