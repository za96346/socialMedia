import { signInType } from "./type";
import axios from "axios";
export const config={
    url:'http://127.0.0.1:5000',
    logIn:'/login',
}

export async function logIn(data:signInType):Promise<boolean>{
    console.log(config.url+config.logIn)
    return await axios({
        method:'POST',
        url:config.url+config.logIn,
        data:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then((res)=>{
        console.log(JSON.parse(res.data))
        return true
    }).catch((res)=>{
        return false
    })
}