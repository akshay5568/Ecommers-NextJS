'use client'
import { Button } from "@/components/ui/button"
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
   }
  return (
      <div>
           <form onSubmit={handllerSubmit}>
            <input type="text" placeholder="Enter Name" name="name" onChange={inputHandller} value={inputData.name}/>
               <input type="email" placeholder="Enter Email" name="email" onChange={inputHandller} value={inputData.email}/>
               <input type="password" placeholder="Enter password" name="password" onChange={inputHandller} value={inputData.password}/>
               <Button>Sign Up</Button>
           </form>
      </div>
  )
}

export default page