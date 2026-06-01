import { Request,Response,NextFunction } from "express";
import { generateResponse } from "../helpers/response/responseHelper.js";
import { verifyAccessToken } from "../helpers/jwt/jwtHelper.js";

export const authorize = (req:Request,res:Response,next:NextFunction)=>{
    const authHeader= req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json(generateResponse(null,"No Access",false))
    }
    const token = authHeader.split(" ")[1];
    try{
        const decoded = verifyAccessToken(token!)
        next();
    }
    catch(error){
        return res.status(500).json(generateResponse(null,"Middleware error",false))
    }
}