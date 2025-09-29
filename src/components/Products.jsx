import Image from "next/image";
import Link from "next/link";
import connectDB from "@/lib/db";
import { Product } from "@/schemas/productSchema";
import AddToCart from "./AddToCart";



const Products = async () => {
  await connectDB();
  const productData = await Product.find().lean();
  return (
    <div className="p-3 flex flex-wrap gap-6 w-full h-fit">
      {productData.map((pro, index) => {
        const productid = pro._id.toString();
        return (
          <div key={index} className="w-[18%] h-80">
          <Link href={`/product/${pro._id}`}>
            <div className="w-full bg-[#f6f6f6] rounded-md">
              <div className="w-full h-[200px]">
                <Image
                  src={pro?.img}
                  width={400}
                  height={400}
                  className="m-auto rounded-md object-fit h-full"
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
             <AddToCart productID={productid}/>
        </div>
        );
      })}
    </div>
  );
};

export default Products;
