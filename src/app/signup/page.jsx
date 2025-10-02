'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
import { useState } from "react"

const page = () => {

    const [inputData,setInputData] = useState({
        name:"",
        email:"",
        password:""
    })

    const inputHandller = (e) => {
        setInputData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

   const handllerSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/signup', {
        method:"POST",
         headers: { "Content-Type": "application/json" },
        body:JSON.stringify(inputData)
    })
    setInputData({
        name:"",
        email:"",
        password:""
    })
    redirect('/api/login')
   }
  return (
      <div className="w-full h-screen flex items-center text-center justify-center">
        <div className="max-sm:w-[80%] h-[30%] w-[30%] max-md:w-[50%] m-auto  bg-[#FAF8F1] max-sm:rounded-md rounded-xl p-3">
           <form onSubmit={handllerSubmit}>
            <Input type="text" required placeholder="Enter Name" name="name" onChange={inputHandller} value={inputData.name} /><br />
               <Input className={'mb-3 mt-3'} required type="email" placeholder="Enter Email" name="email" onChange={inputHandller} value={inputData.email}/><br />
               <Input type="password" required placeholder="Enter password" name="password" onChange={inputHandller} value={inputData.password}/><br />
               <Button className={'mt-3'}>Sign Up</Button>
           </form>
           <div>
             <Link href={'/api/login'} className="hover:underline font-semibold">already have account?</Link>
           </div>
           </div>
      </div>
  )
}

export default page