import mongo from 'mongoose';

let isConnected = false;
export default async function connectDB () {
    if (isConnected) {
        console.log("MongoDB already connected");
        return;
    }

    try {
     const Mongo_Url = process.env.MONGO_URL;
    await mongo.connect(Mongo_Url);
    console.log("MongoDB connected");
     isConnected = true;
    }catch (error) {
        console.error(error)
    }

}

