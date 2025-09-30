import { userSession } from "@/lib/actions";
import Image from "next/image";
import Logout from "./Logout";

const Profile = async () => {
  const session = await userSession();

  return (
    <div>
      <div className="flex justify-between w-[30%] max-sm:w-full p-2 ">
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
      <div className="p-2">
        <Logout />
      </div>
    </div>
  );
};

export default Profile;
