import { Product } from "@/schemas/productSchema";


export async function POST(req){
     const categoryType = await req.json();
     const products = await Product.find({category:categoryType});
     if(products.length == 0) return Response.json("No Product Found based on this category");
     return Response.json(products, {status:200});
}

