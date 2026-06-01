import dotenv from "dotenv"
import { generateResponse } from "../../helpers/response/responseHelper.js";
import { generateAccess } from "../../helpers/jwt/jwtHelper.js";
dotenv.config()
export const login = async (password:string) =>{
    try{
        const passwordEnv = process.env.PASSWORD!;
        if(passwordEnv!==password){
            return generateResponse(null,"Error",false)
        }
        const token = generateAccess()
        const data = {
            token:token
        }
        return generateResponse(data,"Login success",true)

    }
    catch(error){
        return generateResponse(null,"Error",false)
    }
}