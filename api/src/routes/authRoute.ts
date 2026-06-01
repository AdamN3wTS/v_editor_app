import { Router } from "express";
import { generateResponse } from "../helpers/response/responseHelper.js";
import { login } from "../services/auth/authService.js";
import { authorize } from "../middlewares/authMiddleware.js";
const router = Router()

router.post("/login",async (req,res)=>{
    try{
        const {password} = req.body
        const serviceResult = await login(password)
        if(!serviceResult.success){
            return res.status(400).json(serviceResult)
        }
        return res.json(serviceResult)
    }
    catch(error){
        return res.status(500).json(generateResponse(null,"Endpoint Error",false))
    }
})

export default router;