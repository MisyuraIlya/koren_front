import { saveToStorage } from "../helper/auth.helper";
import axios from "axios";

export const AuthService = {
    async login(obj: LoginForm): Promise<IUser> {
        const response = await axios.post(`/auth/login`, obj);
        if(response.data) saveToStorage(response.data)
        return response.data; 
    }
};
