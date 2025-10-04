'use client'
import Image from "next/image";
import logo from "../../public/webLogo.jpg";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoIosCart } from "react-icons/io";
import { Catagery } from "./Catagery";
import { IoIosSearch } from "react-icons/io";


import Logout from "./Logout";
import { useSession } from "next-auth/react";
import { useState } from "react";


export const Navbar =  () => {
   const {data:session } = useSession()
   const [focus,setFocus] = useState(false);
  return (
    <div className="flex w-full max-sm:p-1 max-sm:border-b-1 items-center justify-between h-16 p-3">
      <Link href={"/"}>
       <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>

      <div className="max-sm:inline hidden" onClick={() => setFocus(!focus)}>
        <IoIosSearch/>
      </div>

      <div className={`${focus ? "max-sm:inline ": "hidden"} z-40`}><SearchBar/></div>    

     <div className="max-sm:hidden">
          <Catagery/>
     </div>

      <div className="max-sm:hidden">
        <SearchBar />
      </div>

      {session?.user ?  <div className="flex items-center gap-7">
        <Link href={"/profile"} className="flex items-center gap-1">
          <CgProfile /> Profile
        </Link> 

        <Link href={"/cart"} className="flex items-center gap-1">
          <IoIosCart /> Cart {}
        </Link> 
      </div> : <div className="flex gap-2 ">
            <Link href={'/api/login'}>Login</Link> 
            <Link href={'/signup'}>signup</Link> 
          </div>}


        <div className="max-sm:hidden">
       {session?.user && <Logout/>}
        </div>
    </div>
  );
};
