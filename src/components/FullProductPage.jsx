import Image from "next/image";
import { Button } from "./ui/button";
import connectDB from "@/lib/db";
import { Product } from "@/schemas/productSchema";
import AddToCart from "./AddToCart";

const FullProductPage = async ({id}) => {

  await connectDB();
  const ProductDetails = await Product.findById(id);
  return (
    <div className="w-full p-2 h-fit">

      <div className="flex  w-full gap-30 h-120">

        <div className="w-[50%] h-full">
          <Image
            className="rounded-xl m-auto w-full h-full object-fit"
            alt="productImage"
            width={200}
            height={200}
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
            <Button className={'mt-2 rounded-md'}>Buy</Button>
            <AddToCart productID={ProductDetails._id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProductPage;
