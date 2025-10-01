'use client'
import { useState } from "react"
import { Button } from "./ui/button"
import UploadProduct from "./UploadProduct";
import UserProducts from "./UserProducts";

const StateSwapProfile = () => {
   const [tab,setTab] = useState("");

  return (
    <div>
    <div className="w-full h-full border-b-1 border-gray-200 p-2 mt-5 mb-3">
        <Button className={'bg-gray-400 text-black hover:bg-gray-100 mr-1'} onClick={() => setTab("uploadProducts")}>Upload Products</Button>
        <Button  className={'bg-gray-400 text-black hover:bg-gray-100'} onClick={() => setTab("YourAllProducts")}>You All Products</Button>
    </div>
            {tab == "uploadProducts" ? <UploadProduct/> : ""}
            {tab == "YourAllProducts" ? <UserProducts/> : ""}
    </div> 
  )
}

export default StateSwapProfile