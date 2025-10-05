
import HomeBanner from "@/components/HomeBanner";
import Products from "@/components/Products";



const Home = async () => {
  

  return (
    <div className="w-full">
      <section>
        <HomeBanner />
      </section>

      <section className="w-full h-fit">
        <Products/>
      </section>
    </div>
  );
};

export default Home;
