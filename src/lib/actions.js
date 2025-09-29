import { getServerSession } from "next-auth";
import connectDB from "./db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



//For the filtering Carts.
export const cartFilter = async () => {
  await connectDB();
  const response = await fetch("http://127.0.0.1:3000/cart/api");   
  const CartData = await response.json();
  const session = await getServerSession(authOptions);
  const allUserCarts = CartData?.filter(
    (item) => item.userId == session?.user.id
  );
  return allUserCarts;
};


//for the sesion details.
export const userSession = async () => {
    const session = await getServerSession(authOptions);
    return session;
}
