"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });

     if (result?.error === "REDIRECT_TO_SIGNUP") {
    window.location.href = "/signup";
  } else if (!result?.error) {
    window.location.href = result.url || "/";
  }
  }

 

  return (
    <div className="w-[100%] h-screen text-center flex items-center justify-center">
      <div className="max-sm:w-[80%] h-[30%]  m-auto p-2 bg-[#FAF8F1] max-sm:rounded-md rounded-xl">
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            className={"mb-3 mt-3"}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <Button className={"mt-3 mb-3"} type="submit">
            Login
          </Button>
        </form>

        <hr />
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="hover:underline font-bold cursor-pointer"
        >
          Sign in with Google
        </button>

        <div>
          <Link href={"/signup"} className="font-semibold hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
