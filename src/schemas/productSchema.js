import mongo from 'mongoose';


const ProductSchema = new mongo.Schema({
    title:{
        type:String,
    },
    details:{
        type:String,
    },
    sellerId:{
        type:mongo.Schema.ObjectId, ref:"User",
    },
    img:{
        type:String,
    },
    rating:{
        type:[{comment:{type:String}, user:{type:mongo.Schema.ObjectId, ref:"User"}}]
    },
    price:{
        type:Number
    },
    
},{
    timestamps:true
})


export const Product = mongo.models?.Product || mongo.model("Product", ProductSchema);;

