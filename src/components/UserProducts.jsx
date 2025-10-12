"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Loading from "./Loading";
import Link from "next/link";

const UserProducts = () => {
  const { data: session } = useSession();
  const [userProduct, setUserProduct] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const callApi = async () => {
      try {
        await fetch(`profile/${session?.user?.id}`)
          .then((res) => res.json())
          .then((res) => setUserProduct(res));
      } catch (err) {
        console.error(err);
      }
      finally{
          setLoading(false);
      }
    };
    callApi();
  }, []);

  const DeleteProduct = async (id) => {
      const respons =  await fetch('/product', {
         method:"DELETE",
         body:JSON.stringify(id)
       })
    setUserProduct(prev => prev.filter(item => item._id !== id));
  }

  if (loading) {
     return (
      <div className="w-full h-full flex items-center justify-center">
          <Loading/>
      </div>
     )
  }

  return (
    <div className="w-full h-full p-2">
      {userProduct?.length > 0
        ? userProduct?.map((item, index) => {
            return (
              <div key={index} className="flex gap-3 justify-between border-1 m-3 p-3 items-end">
                <div className="flex gap-3 ">
                  <Link href={`/product/${item._id}`} className="w-30 h-30 relative">
                    <Image
                      fill
                      className="rounded-md"
                      src={item.img}
                    />
                  </Link>

                  <div>
                    <span className="block">{item.title}</span>
                    <span className="block text-xs text-gray-500">{item.details}</span>
                    <span className="block text-xs text-gray-500">{item.rating?.length}</span>
                    <span className="block mt-4 font-semibold">$ {item.price}</span>
                  </div>
                </div>

                <div>
                  <Button onClick={() => DeleteProduct(item._id)}>Delete</Button>
                </div>
              </div>
            );
          })
        : "No product uploaded yet"}
    </div>
  );
};

export default UserProducts;
