"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import NoCart from "./NoCart";

const Cart = ({ userCarts }) => {
  const [allUserCart, setAllUserCart] = useState(userCarts);
  const DeleteButton = async (id) => {
    try {
      const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/api`, {
        method: "DELETE",
        body: JSON.stringify(id),
      });

      setAllUserCart((prev) => prev.filter((carts) => carts._id !== id));       
    } catch (error) {
      console.error(error);
    }
  };
  let totalCartValue = allUserCart.reduce(
    (acc, item) => acc + item.productId.price * item.qty,
    0
  );

  return (
       <div>
          {allUserCart.length > 0 ?  <div className="p-3 flex w-full">
      <div className="w-[90%] mt-3">
        {allUserCart.map((item, index) => {
          return (
            <div className="flex p-3 w-full" key={index}>
              <div className="w-[75%] m-auto border-1 border-gray-150 p-3  rounded-md">
                <div className="flex gap-5  w-full">
                  <div className="w-30">
                    <Image
                      className="rounded-md w-30 h-30 object-fit"
                      width={100}
                      height={100}
                      src={item.productId.img}
                      alt="product image"
                    />
                  </div>
                  <div className="w-full flex gap-3 items-end justify-between">
                    <div>
                      <span className="block">{item.productId.title}</span>
                      <span className="block text-xs text-gray-500">
                        {item.productId.details}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {item.productId.rating.length}
                      </span>
                      <span className="block mt-5 text-xl font-semibold">
                        ${item.productId.price}
                      </span>
                    </div>

                    <div className="">
                      <span className="block mb-3">Qty : {item.qty}</span>
                      <Button onClick={() => DeleteButton(item._id)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-60 h-30 m-auto bg-gray-200 mt-3 rounded-md p-3">
        <div className="flex justify-between font-semibold">
          <span className="block">Cart items : </span>
          <span className="block">{allUserCart?.length}</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span className="block">Total Cart Value : </span>
          <span className="block ">$ {totalCartValue}</span>
        </div>
      </div>
    </div> : <NoCart/>}
       </div>
  );
};

export default Cart;
