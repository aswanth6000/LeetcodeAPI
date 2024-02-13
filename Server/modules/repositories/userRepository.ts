import userlogin from "../../interfaces/userInterface";
import userModel from "../../model/userSchema";




export class userRepository{
    //user registration
    async userRegister(data:any){
        try{
           const userdata= await userModel.create(data);
           userdata.save()
            return userdata
        }catch(error:any){
            throw new Error(error.message)
        }
    }
    //checking if  the user is already existed
    async isUserexists(data:any){
        try{
            const userdata= await userModel.find({username:data.username});
           return userdata
         }catch(error:any){
             throw new Error(error.message)
         }
    }
    //login
    async loginUser(data:userlogin){
        try{
            const user=await userModel.find({username:data.username});
            return user
        }catch(error){
            throw new Error("user not exist")
        }
    }
    async forgotpassword(data:string){
        try{
            const user=await userModel.find({email:data});
            return user
        }catch(error){
            throw new Error("user not exist")
        }
    }
    async updatepassword(data:any){
        try{
            const user=await userModel.find({email:data.email});
            user[0].password=data.passord;
            user[0].save()
            return user
        }catch(error){
            throw new Error("user not exist")
        }
    }
}