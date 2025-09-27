'use client'
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const Logout = () => {
  return (
    <div>
        <Button onClick={() => signOut({callbackUrl:'/api/login'})}>Logout</Button>
    </div>
  )
}

export default Logout