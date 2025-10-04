'use client'

import { useRouter } from "next/navigation";



export const Catagery = () => {
  const router = useRouter()
    const handler = (e) =>{
        router.push(`/product/category/${e.target.value}`);
    }


  return (
         <select onChange={handler}>
             <option value="">Categories</option>
             <option value="electronic">Eletronocs</option>
             <option value="Crt">Eletronocs</option>
             <option value="fb">Eletronocs</option>
             <option value="grocery">grocery</option>
         </select>
  )
}
