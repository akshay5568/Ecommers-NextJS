import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const NoCart = () => {
  return (
    <div className="w-full">   
         <div className="w-[70%] flex items-center justify-center m-auto border-1 border-gray-200 mt-3 p-3 rounded-md">
                <MdOutlineRemoveShoppingCart/>Empty Cart
         </div>
    </div>
  )
}

export default NoCart