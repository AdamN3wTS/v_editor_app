import express from "express"

import AuthRoute from "./routes/authRoute.js"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json());
app.use("/api/auth",AuthRoute)
app.listen(5050,()=>{
    console.log("server is running")
})