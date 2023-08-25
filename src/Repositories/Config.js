import axios from "axios";
import { APIBaseUrl } from "../Constants/appSettings.js";

export const api = axios.create({
    baseURL: APIBaseUrl
});