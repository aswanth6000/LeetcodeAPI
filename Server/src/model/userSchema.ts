import mongoose, { Document, Model } from 'mongoose';
export interface UserDocument extends Document {

    username:string;
    email: string;
    phone:String;
    password:string

    
  

}

const userSchema = new mongoose.Schema<UserDocument>({
    username:{
        type:String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  });
  
  const  userModel: Model<UserDocument>= mongoose.model("user", userSchema);
  export default userModel