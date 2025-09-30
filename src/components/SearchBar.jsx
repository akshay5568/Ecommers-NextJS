'use client'
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useEffect, useState } from "react"
const SearchBar =  () => {
  const [AllProdcuts,setAllProducts] = useState([]);
  const [input, setInput] = useState("");
   useEffect(() => {
       const callFunction = async () => {
             await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product`).then(res => res.json()).then(res=>setAllProducts(res));     
       }
       callFunction();   
   }, [] )

   const filterProductsByInput = AllProdcuts.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
  
   const [focus,setFocus] = useState(false);


  return (
    <div className="w-full items-center text-black relative">
        <div className="w-100 flex ">
            <Input value={input} onChange={(e) => setInput(e.target.value)} className={'rounded-xl'} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false) , 300)} placeholder="Search Product"/>


             {focus && <div className="absolute w-full h-50 overflow-y-scroll top-11 bg-[#ffffff] border-t-1 rounded-md z-50">
               {filterProductsByInput.map((item,index) => {
                  return (
                       <Link href={`/product/${item._id}`}><span className="block  p-1 mb-1 hover:bg-gray-100 rounded-md" key={index}>{item.title}</span></Link>
                  )
               })}
        </div>}
        </div>

       
    </div>
  )
}

export default SearchBar