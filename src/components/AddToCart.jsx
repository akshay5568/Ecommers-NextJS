
'use client'
import { useSession } from "next-auth/react";
import { Button } from "./ui/button"
import connectDB from "@/lib/db"

const AddToCart = ({productID}) => {
    
    const {data:session} = useSession()
    const userID = session?.user?.id;
  
    const addtoclick = async () => {
      const payload = {
          productID,
          userID
      }
        await connectDB();
        const response = await fetch(`/cart/api`, {
            method:"POST",
            body:JSON.stringify(payload)
        })
        const res = await response.json()
        alert(res);
    }
  return (
       <div className="mt-2">
           <Button onClick={addtoclick} className={'rounded-xl text-xs px-3 py-1'}>Add To Cart</Button>
       </div>
  )
}

export default AddToCart;      