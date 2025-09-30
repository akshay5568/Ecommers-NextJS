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

      <div className="flex max-sm:block  w-full gap-30 max-sm:h-80 h-120">

        <div className="w-[50%] max-sm:w-full h-full">
          <Image
            className="rounded-xl m-auto w-full h-full object-fit"
            alt="productImage"
            width={200}
            height={200}
            src={ProductDetails.img}
          />
        </div>

        <div className="w-[50%] max-sm:w-full max-sm:mt-3">
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

          <div className="flex max-sm:w-full items-center gap-3">
            <Button className={'mt-2 rounded-md max-sm:w-[50%]'}>Buy</Button>
            <span className="block max-sm:w-[50%]">
              <AddToCart productID={ProductDetails._id}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProductPage;
