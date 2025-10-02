"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const UserProducts = () => {
  const { data: session } = useSession();
  const [userProduct, setUserProduct] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        await fetch(`profile/${session?.user?.id}`)
          .then((res) => res.json())
          .then((res) => setUserProduct(res));
      } catch (err) {
        console.error(err);
      }
    };
    callApi();
  }, []);

  return (
    <div className="w-full h-full p-2">
      {userProduct?.length > 0
        ? userProduct?.map((item, index) => {
            return (
              <div key={index} className="flex gap-3 justify-between border-1 m-3 p-3 items-end">
                <div className="flex gap-3 ">
                  <div className="w-30 h-30 relative">
                    <Image
                      fill
                      className="rounded-md"
                      src={item.img}
                    />
                  </div>

                  <div>
                    <span className="block">{item.title}</span>
                    <span className="block text-xs text-gray-500">{item.details}</span>
                    <span className="block text-xs text-gray-500">{item.rating?.length}</span>
                    <span className="block mt-4 font-semibold">$ {item.price}</span>
                  </div>
                </div>

                <div>
                  <Button>Delete</Button>
                </div>
              </div>
            );
          })
        : "No product uploaded yet"}
    </div>
  );
};

export default UserProducts;
