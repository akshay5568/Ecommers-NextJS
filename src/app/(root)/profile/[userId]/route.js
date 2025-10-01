import { Product } from "@/schemas/productSchema";

export async function GET(_, { params }) {
  try {
    const { userId } = await params;
    if (!userId) return Response.json('No user Found', {status:400})
    const userProducts = await Product.find({sellerId:userId});
    if (!userProducts) return Response.json({massege:"Seller No product uploded yet."}, {status:200});
    return Response.json(userProducts, { status: 200 });
  } catch (err) {
    console.error(err);
  }
}
