import Image from "next/image";
import { Button } from "./ui/button";
import image from "../../public/image.jpg";
import connectDB from "@/lib/db";
import { Product } from "@/schemas/productSchema";

const FullProductPage = async ({id}) => {

  console.log(id)
  await connectDB();
  const ProductDetails = await Product.findById(id);
  console.log(ProductDetails.details)
  return (
    <div className="w-full p-2">

      <div className="flex  w-full gap-30">

        <div className="w-[50%]">
          <Image
            className="rounded-xl m-auto"
            alt="productImage"
            width={700}
            height={500}
            src={ProductDetails.img}
          />
        </div>

        <div className="w-[50%]">
          <div className="text-2xl font-bold">
            <span>{ProductDetails.title}</span>
          </div>

          <div className="text-xs text-gray-500"> 
            <span>{ProductDetails.details}</span>
          </div>

          <div className="text-xs">
            <span>{ProductDetails.rating.length}</span>
          </div>

          <div>
            <span>qty</span>
          </div>

           <div>
            <span>${ProductDetails.price}</span>
          </div>

          <div className="flex items-center gap-3">
            <Button>Buy</Button>
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProductPage;
