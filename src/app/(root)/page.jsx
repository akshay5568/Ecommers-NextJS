export const dynamic = "force-dynamic";

import HomeBanner from "@/components/HomeBanner";
import Products from "@/components/Products";

async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product`);
  const data = await response.json();
  return data;
}

const Home = async () => {
  const data = await getData();

  return (
    <div className="w-full">
      <section>
        <HomeBanner />
      </section>

      <section className="w-full h-fit">
        <Products productData={data} />
      </section>
    </div>
  );
};

export default Home;
