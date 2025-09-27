import HomeBanner from "@/components/HomeBanner";
import Products from "@/components/Products";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Home = async () => {
  const session = await getServerSession(authOptions);
   
  return (
    <div className="w-full">
      <section>
        <HomeBanner />     
      </section>

      <section>
        <Products/>
      </section>
    </div>
  );
};

export default Home;
