import connectDB from "@/lib/db";
import { User } from "@/schemas/usersSchema";
import bcrypt from "bcrypt";

export async function POST(res) {
  try {
    await connectDB();
    const { name, email, password } = await res.json();
    const isUserExist = await User.findOne({ email });
    if (isUserExist)
      return Response.json("User already exist please login", {
        status: 401,
      });

    const hashPass = await bcrypt.hash(password, 15);
    await User.create({
      name,
      email,
      password: hashPass,
    });

    return Response.json("User register Succesfully", { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
