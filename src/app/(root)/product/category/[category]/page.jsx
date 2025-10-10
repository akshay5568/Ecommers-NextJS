"use client";
import AddToCart from "@/components/AddToCart";
import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const { category } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const apiCall = async () => {
        const response = await fetch("/product/category", {
          method: "POST",
          body: JSON.stringify(category),
        });
        const products = await response.json();
        setData(products);
      };
      apiCall();
    } catch (error) {
      console.error(error);
    }
    finally{
       setLoading(false);
    }
  }, []);

  if (loading) {
    return (
       <div className="w-full h-full flex items-center justify-center">
         <Loading/>
       </div>
    )
  }
  
  return (
    <div>
      {data !== "No Product Found based on this category" ? (
          <div className="p-3 flex max-sm:block flex-wrap gap-6 w-full h-[100%]">
      {data?.map((pro, index) => {
        const productid = pro._id?.toString();
        return (
        <div key={index} className="w-[18%] max-lg:w-[30%] max-sm:w-full h-80 max-sm:h-100">
          <Link href={`/product/${pro._id}`}>
            <div className="w-full h-[60%] max-sm:h-[70%] bg-[#f6f6f6] rounded-md">
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
      ) : (
        "No products found based on this category"
      )}
    </div>
  );
};

export default page;
