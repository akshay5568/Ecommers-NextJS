"use client";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Products = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await fetch("/product");
        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    apiCall();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="p-3 flex max-sm:block flex-wrap gap-6 w-full h-[100%]">
      {productData?.map((pro, index) => {
        const productid = pro._id?.toString();
        return (
          <div
            key={index}
            className="w-[18%] max-lg:w-[30%] max-sm:w-full h-80 max-sm:h-100"
          >
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
                <span>{pro.title.substring(0,25) + ""}</span>
                <span>${pro.price}</span>
              </div>

              <div className="text-xs text-gray-500">
                <span>{pro.details}</span>
              </div>

              <div className="text-xs text-gray-500">
                <span>{pro.rating.length}</span>
              </div>
            </Link>
            <AddToCart productID={productid} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
