import HomeBanner from "@/components/HomeBanner";
import Products from "@/components/Products";

const Home = () => {
  return (
    <div>
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
