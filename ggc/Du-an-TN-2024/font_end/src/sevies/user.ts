import axiosIinstance from "../config/axiot";
import { UserLogin, UserRegister } from "../interface/user";

export const userRegister = async(register: UserRegister) => {
    try {
        const {data} = await axiosIinstance.post('/auth/register',register)
        return data 
    } catch (error) {
        console.log(error);
    }
}
export const userLogin = async(login: UserLogin) => {
    try {
        const {data} = await axiosIinstance.post('/auth/login',login)
        return data 
    } catch (error) {
        console.log(error);
    }
}