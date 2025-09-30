import Image from "next/image";
import Banner from "../../public/Banner.jpg";
const HomeBanner = () => {
  const banner = [{ img: {} }];
  return (
    <div className="p-3 max-sm:hidden">
      <div className="w-full h-87">
        <Image className="h-full object-fit rounded-md" src={Banner} alt="banner"/>
      </div>
    </div>
  );
};

export default HomeBanner;
