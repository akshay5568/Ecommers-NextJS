'use client'
import { useParams } from "next/navigation"
import { useEffect } from "react";

const page = () => {
   const {category} = useParams();
   useEffect(() => {
        const apiCall = async () => {
          const response = await fetch('/product/category', {
               method:"POST",
               body:JSON.stringify(category)
            })
            const products = await response.json();
            console.log(products);
        }
        apiCall();
   } ,[])
  return (
      <div>
          nknkknknkn
      </div>
  )
}

export default page