import { api } from "./Config";

export const signIn = (form) => {
    console.log("form :", form);
    return api.post("https://localhost:7071/signIn", form);
}