'use client'
import Image from "next/image";
import logo from "../../public/webLogo.jpg";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoIosCart } from "react-icons/io";
import { Catagery } from "./Catagery";

import Logout from "./Logout";
import { useSession } from "next-auth/react";


export const Navbar =  () => {
   const {data:session } = useSession()
    console.log(session)
  return (
    <div className="flex w-full items-center justify-between h-16 p-3">
      <Link href={"/"}>
       <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>

     <div>
          <Catagery/>
     </div>

      <div>
        <SearchBar />
      </div>

      {session?.user ?  <div className="flex items-center gap-7">
        <Link href={"/profile"} className="flex items-center gap-1">
          <CgProfile /> Profile
        </Link> 

        <Link href={"/cart"} className="flex items-center gap-1">
          <IoIosCart /> Cart {}
        </Link> 
      </div> : <div className="flex gap-2">
            <Link href={'/api/login'}>Login</Link> 
            <Link href={'/signup'}>signup</Link> 
          </div>}


       {session?.user && <Logout/>}
    </div>
  );
};
