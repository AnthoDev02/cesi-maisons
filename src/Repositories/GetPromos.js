import { api } from "./Config";

export const GetAllPromos = () => {
    return api.get("https://localhost:7071/allPromos");
}