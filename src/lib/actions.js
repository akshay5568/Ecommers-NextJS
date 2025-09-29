import { getServerSession } from "next-auth";
import connectDB from "./db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



//For the filtering Carts.
export const cartFilter = async () => {
  await connectDB();
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/api`);   
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
