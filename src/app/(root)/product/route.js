import connectDB from "@/lib/db";
import { Product } from "@/schemas/productSchema";



export async function POST(req) {
     try {
        await connectDB();
        const productData = await req.json();
        const newProduct = await Product.create(productData);
        return Response.json(newProduct, {status:200});
     } catch (error) {
        console.error(error)
     }
}

export async function GET() {
    try {
        await connectDB();
        const data = await Product.find();
        return Response.json(data);
    }
    catch (error) {
         console.error(error)
    }
}