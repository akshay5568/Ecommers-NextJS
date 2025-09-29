import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
     userId:{
         type:mongoose.Schema.ObjectId, ref:"User",
        required: true
     },
     productId:{
         type:mongoose.Schema.ObjectId, ref:"Product",
          required: true
     } ,
     qty:{
        type:Number,
        default:1,
     }
})


export const Cart = mongoose.models?.Cart || mongoose.model('Cart', cartSchema);