import { api } from "./Config";

export const signIn = (form) => {
    return api.post("https://localhost:7071/signIn", form);
}