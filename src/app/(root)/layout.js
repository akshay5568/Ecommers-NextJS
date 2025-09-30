"use client";
import { Navbar } from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
export default function RootLayout({ children }) {
  return (
    <main>
      <SessionProvider>
      <div className="pl-10 pr-10 max-sm:p-1">
        <section>
          <Navbar />
        </section>
        {children}
      </div>
      </SessionProvider>
    </main>
  );
}
