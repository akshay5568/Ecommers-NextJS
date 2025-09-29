import { userSession } from "@/lib/actions"
import Image from "next/image"

const Profile = async () => {
       const session = await userSession();
    
  return (
    <div className="flex justify-between w-[30%] p-2 h-30">
        <div>
              {/* <Image
              src={session?.user.image}
              alt="user image"
        width={100}
        height={100}
              /> */}
        </div>

        <div>
            <span>{session?.user.name}</span>
        </div>

        <div>
            <span>{session?.user.email}</span>
        </div>
    </div>
  )
}

export default Profile