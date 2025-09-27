"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/"
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <hr />
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Sign in with Google
      </button>
    </div>
  );
}
