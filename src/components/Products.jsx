'use client'
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { useEffect, useState } from "react";

const Products = () => {
  const [productData,setProductData] = useState(null)

  useEffect(() => {
      const apiCall = async () => {
        const res = await fetch('/product');
        const data = await res.json();
        setProductData(data)
      }
      apiCall();
  } , [] )

  return (
    <div className="p-3 flex max-sm:block flex-wrap gap-6 w-full h-[100%]">
      {productData?.map((pro, index) => {
        const productid = pro._id?.toString();
        return (
        <div key={index} className="w-[18%] max-lg:w-[30%] max-sm:w-full h-80 max-sm:h-90">
          <Link href={`/product/${pro._id}`}>
            <div className="w-full h-[60%] bg-[#f6f6f6] rounded-md">
              <div className="w-full h-full relative">
                <Image
                  src={pro?.img}
                  fill
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
