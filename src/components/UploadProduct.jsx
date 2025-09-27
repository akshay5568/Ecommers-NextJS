"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";




const UploadProduct = () => {

  const {data:session} = useSession();
  
  const [inputData, setInputData] = useState({
    title: "",
    details: "",
    price: 0,
    img:"",
  });

 const inputHandler = (e) => {
    setInputData((prev) => ({
        ...prev, 
        [e.target.name] : e.target.value
    }))
 }
  const handlerSubmit = async (e) => {
      e.preventDefault();

      const paylod = {
        ...inputData,
        sellerId:session.user.id,
      }

      try {
           await fetch('/product', {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(paylod)
           })
      } catch (error) {
         console.error(error)
      }


      setInputData({
        title:"",
        details:"",
        price:"",
        img:""
      })
  }


  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
        value={inputData.title} 
          onChange={inputHandler}
        />
        <input
          type="text"
          name="details"
          placeholder="Enter Details"
          value={inputData.details} 
          onChange={inputHandler}
        />
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={inputData.price}
          onChange={inputHandler}
        />
         <input
          type="text"
          name="img"
          placeholder="Enter img url"
          value={inputData.img}
          onChange={inputHandler}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default UploadProduct;
