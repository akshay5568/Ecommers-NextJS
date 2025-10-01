"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import NoCart from "./NoCart";

const Cart = ({ userCarts }) => {
  const [allUserCart, setAllUserCart] = useState(userCarts);

  const DeleteButton = async (id) => {
    try {
      const res = fetch(`/cart/api`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      setAllUserCart((prev) => prev.filter((carts) => carts._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  let totalCartValue = allUserCart.reduce(
    (acc, item) => acc + item.productId?.price * item.qty,
    0
  );

  return (
    <div>
      {allUserCart.length > 0 ? (
        <div className="p-3 max-sm:block flex w-full">
          <div className="w-[90%] max-sm:w-full mt-3">
            {allUserCart.map((item, index) => {
              return (
                <div className="flex p-3 w-full" key={index}>
                  <div className="w-[75%] max-sm:w-full m-auto border-1 border-gray-150 p-3  rounded-md">
                    <div className="flex gap-5  w-full">
                      <div className="w-40 h-30 relative">
                        <Image
                          className="rounded-md w-30 h-30 object-fit"
                          fill
                          src={item.productId?.img}
                          alt="product image"
                        />
                      </div>
                      <div className="w-full flex gap-3 items-end justify-between">
                        <div>
                          <span className="block">{item.productId?.title}</span>
                          <span className="block text-xs text-gray-500">
                            {item.productId?.details}
                          </span>
                          <span className="block text-xs text-gray-500">
                            {item.productId?.rating?.length}
                          </span>
                          <span className="block mt-5 text-xl font-semibold max-sm:text-xs">
                            ${item.productId?.price}
                          </span>
                        </div>

                        <div className="max-sm:text-xs">
                          <span className="block mb-3">Qty : {item.qty}</span>
                          <Button className={'text-xs px-2 py-2'} onClick={() => DeleteButton(item._id)}>
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

          <div className="w-60 max-sm:w-full h-30 m-auto bg-gray-200 mt-3 rounded-md p-3">
            <div className="flex justify-between font-semibold">
              <span className="block">Cart items : </span>
              <span className="block">{allUserCart?.length}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span className="block">Total Cart Value : </span>
              <span className="block ">$ {totalCartValue}</span>
            </div>
          </div>
        </div>
      ) : (
        <NoCart />
      )}
    </div>
  );
};

export default Cart;
