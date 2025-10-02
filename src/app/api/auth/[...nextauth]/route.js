import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// Optional: CredentialsProvider if you want email/password login
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import connectDB from "@/lib/db";
import { User } from "@/schemas/usersSchema";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        console.log(credentials)
        const user = await User.findOne({ email: credentials.email });
        const isPassMatch = await bcrypt.compare(credentials.password, user.password);  
        if(!user) return null;
        if(!isPassMatch) return null; 
        if (user && isPassMatch) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
      async signIn({ user, account }) {
      await connectDB();

      const dbUser = await User.findOne({ email: user.email });

      // If user does not exist in DB → redirect them to signup
      if (!dbUser) {
        if (account.provider === "google") {
          // Block login and redirect manually
          throw new Error("REDIRECT_TO_SIGNUP");
        }
        return false;
      }

      return true;
    },
    
    async jwt({ token, user }) {
        if (user) {
           await connectDB();
           let dbUser = await User.findOne({email:user.email})   
           if (!dbUser) return "No user found";

           token.id = dbUser._id;
        }
        return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };   
