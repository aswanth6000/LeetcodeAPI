import userModel from "../../model/userSchema";




export class userRepository{
    async userRegister(data:any){
        try{
           const userdata= await userModel.create(data);
           userdata.save()
            return userdata
        }catch(error:any){
            throw new Error(error.message)
        }
    }
    async isUserexists(data:any){
        try{
            const userdata= await userModel.find({username:data.username});
           return userdata
         }catch(error:any){
             throw new Error(error.message)
         }
    }
}