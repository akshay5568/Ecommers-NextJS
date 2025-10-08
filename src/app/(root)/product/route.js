import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/db";
import { Product } from "@/schemas/productSchema";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return Response.json("Unauthrised user", { status: 404 });
    await connectDB();
    const productData = await req.json();
    const newProduct = await Product.create(productData);
    return Response.json(newProduct, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function GET() {
  try {
    await connectDB();
    const data = await Product.find();
    const filterdDataForRefresh = data.splice(Math.floor(Math.random() * 10), data.length);   
    return Response.json(filterdDataForRefresh, {status:200});
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(req) {
  try {
    const id = await req.json();
    if(!id) return Response.json("no id found");
    await connectDB();
    await Product.findByIdAndDelete(id);
    return Response.json("Product Deleted", { status: 200 });   
  } catch (error) {
    console.error(error);
  }
}
