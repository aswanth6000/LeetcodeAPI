import { userRepository } from "../repositories/userRepository";


const userrepository=new userRepository;

export class userService{
    async registeruser(data:any){
        try{
            return userrepository.userRegister(data)
        }catch(error:any){
            throw new Error(error.message)
        }
    }
    async isUserexists(data:any){
        try{
            return userrepository.isUserexists(data)
        }catch(error:any){
            throw new Error(error.message)
        }
    }
}