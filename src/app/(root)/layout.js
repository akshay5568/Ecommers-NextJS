import { Navbar } from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <main>
      <div className="pl-10 pr-10">
        <section>
          <Navbar />
        </section>

      
        {children}
      </div>
    </main>
  );
}
