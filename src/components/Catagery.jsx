'use client'

import { useRouter } from "next/navigation";



export const Catagery = () => {
  const router = useRouter()
    const handler = (e) =>{
       if(e.target.value == "") return router.push('/');
        router.push(`/product/category/${e.target.value}`);
    }


  return (
         <select onChange={handler}>
             <option value="">Categories</option>
             <option value="electronic">Eletronocs</option>
             <option value="Footwear">Footwear</option>
             <option value="Clothes">Clothes</option>
             <option value="Grocery">Grocery</option>
             <option value="Others">Others</option>
         </select>
  )
}
