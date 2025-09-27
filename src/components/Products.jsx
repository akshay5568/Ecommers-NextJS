import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import connectDB from "@/lib/db";
import { Product } from "@/schemas/productSchema";




const Products = async () => {
  await connectDB();
  const productData = await Product.find().lean();

  return (
    <div className="p-3 flex flex-wrap gap-6 h-fit">
      {productData.map((pro, index) => {
        return (
          <div key={index} className="w-[20%] h-20">
          <Link href={`/product/${pro._id}`}>
            
            <div className="w-full bg-[#f6f6f6] rounded-md p-2">
              <div className="w-full">
                <Image
                  src={pro?.img}
                  width={200}
                  height={200}
                  className="m-auto rounded-md"
                  alt="productImage"
                />
              </div>
            </div>

            <div className="flex items-center justify-between font-bold">
              <span>{pro.title}</span>
              <span>${pro.price}</span>
            </div>

            <div className="text-xs text-gray-500">
              <span>{pro.details}</span>
            </div>

            <div className="text-xs text-gray-500">
              <span>{pro.rating.length}</span>
            </div>

           
          </Link>
           <div className="mt-2">
              <Button className={"rounded-xl text-xs px-3 py-1"}>
                Add To Cart
              </Button>
            </div>
            </div>
        );
      })}
    </div>
  );
};

export default Products;
