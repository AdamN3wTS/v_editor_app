import type { ResponseDto } from "../../types/ResponseDto.js"

export const generateResponse = <T>(data:T,msg:string,success:boolean) =>{
    const response:ResponseDto<T> = {
        data:data,
        msg:msg,
        success:success
    }
    return response
}