import { Cart } from "@/schemas/cartSchema";

export async function POST(req) {
  try {
    const { productID, userID } = await req.json();
    if (!userID)
      return Response.json("Please Login then add try to add in cart", {
        status: 404,
      });
    const allCarts = await Cart.find({ productId: productID });
    const isExist = allCarts.find((item) => item.userId == userID);
    if (isExist) {
      isExist.qty = isExist.qty + 1;
      await isExist.save();
      return Response.json("Add one more QTY.", { status: 201 });
    } else {
      const cartItem = new Cart({
        userId: userID,
        productId: productID,
      });
      await cartItem.save();
      return Response.json("Added in cart", { status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function GET() {
  try {
    const CartsData = await Cart.find().populate("productId");
    return new Response(JSON.stringify(CartsData), { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(req) {
  try {
    const productID = await req.json();
    if (!productID) return Response.json("Unable to delete Cart product");
    await Cart.findByIdAndDelete(productID);
    return Response.json("Cart Deleted", {status:200})
  } catch (error) {
    console.error(error);
  }
}
