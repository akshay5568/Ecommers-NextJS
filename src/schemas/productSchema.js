import mongo from 'mongoose';


const ProductSchema = new mongo.Schema({
    title:{
        type:String,
    },
    details:{
        type:String,
    },
    sellerId:{
        type:mongo.Schema.ObjectId, ref:"user",
    },
    img:{
        type:String,
    },
    rating:{
        type:[{comment:{type:String}, user:{type:mongo.Schema.ObjectId, ref:"user"}}]
    },
    price:{
        type:Number
    }
})


export const Product = mongo.models.Product || mongo.model("Product", ProductSchema);;

