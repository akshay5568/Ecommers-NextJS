"use client";
import Products from "@/components/Products";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const { category } = useParams();
  const [data, setData] = useState();
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
  }, []);

  
  return (
    <div>
      {data !== "No Product Found based on this category" ? (
         <Products productData={data} /> 
      ) : (
        "No products found based on this category"
      )}
    </div>
  );
};

export default page;
