import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
export const generateAccess=() =>{
    const key = process.env.JWT_KEY!;
    const rd = parseInt(process.env.JWT_RD! || '60');
    const iss = process.env.JWT_ISSUER!;
    const aud = process.env.JWT_AUDIENCE!;
    const token = jwt.sign({},key,{expiresIn:`${rd}d`,issuer:iss,audience:aud})
    return token
}
export const verifyAccessToken = (token:string) =>{
    const key = process.env.JWT_KEY!;
    const iss = process.env.JWT_ISSUER!;
    const aud = process.env.JWT_AUDIENCE!;
    return jwt.verify(token,key,{issuer:iss,audience:aud});
}
