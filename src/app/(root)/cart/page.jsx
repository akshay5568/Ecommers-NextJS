import Cart from "@/components/Cart";
import { cartFilter } from "@/lib/actions";

const page = async () => {
   const allUserCarts = await cartFilter();
   
  return (
    <div>
        <Cart userCarts={allUserCarts}/>
    </div>
  )
}

export default page