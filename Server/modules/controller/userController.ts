import { userService } from "../services/userService";
import { Response,Request } from "express"
import bcrypt from "bcrypt"


const userservice=new userService()

export class userController{
    async registerUser(req:Request,res:Response){
        try{
            const userdata=req.body;
        const userdetails=await userservice.isUserexists(userdata)
        if(userdetails.length>0){
            return res.status(401).json("user already exists")
        }else{
            let encrptpassword=await bcrypt.hash(userdata.password,10)
            userdata.password=encrptpassword
            const user= await userservice.registeruser(userdata);
            if(user){
             res.status(200).json({ message: "registered successfully" ,user});
 
            }else{
             res.status(401).json("invalid")
            }
        }

          

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}