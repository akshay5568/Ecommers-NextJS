import mongoose from "mongoose";


const userSchema = mongoose.Schema({    
    email:{
        type:String,
        
    },
    password:{
        type:String,
    },
    name:{
        type:String
    }
},{
     timestamps:true
})

export const User = mongoose.models?.User || mongoose.model('User', userSchema);