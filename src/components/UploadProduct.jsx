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
           await fetch(`/product`, {
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
    <div className="w-[30%] p-5 rounded-md m-auto bg-gray-50">
       <h1 className="mb-2 ">UPLOAD PRODUCT VIA FILL THIS FORM</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
        value={inputData.title} 
          onChange={inputHandler}
          required
          className="w-full p-2 border-1 border-gray-900 rounded-md"
        />
        <br /><br />
        <input
          type="text"
          name="details"
          placeholder="Enter Details"
          value={inputData.details} 
          onChange={inputHandler}
          required
          className="w-full p-2 border-1 border-gray-900 rounded-md"

        />
        <br /><br />
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={inputData.price}
          className="w-full p-2 border-1 border-gray-900 rounded-md"
          required
          onChange={inputHandler}
        />
        <br /><br />
         <input
          type="text"
          name="img"
          placeholder="Enter img url"
          value={inputData.img}
          required
          className="w-full p-2 border-1 border-gray-900 rounded-md"

          onChange={inputHandler}
        />
        <Button className={'mt-2 p-2'}>Submit</Button>
      </form>
    </div>
  );
};

export default UploadProduct;
