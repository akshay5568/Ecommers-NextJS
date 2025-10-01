import { userSession } from "@/lib/actions";
import Logout from "./Logout";
import { FiCornerRightDown } from "react-icons/fi";


const Profile = async () => {
  const session = await userSession();

  return (
    <div className="w-full h-[50%]">
      <div className="flex gap-3 w-[30%] max-sm:w-full p-2">
        <div>
            <label htmlFor=""><span className="flex items-center">Name <FiCornerRightDown/></span> </label>
            <input type="text" value={session?.user.name} disabled className="border-1 p-1 rounded-md  cursor-pointer"/>
        </div>

        <div>
          <label htmlFor=""><span className="flex items-center">Email <FiCornerRightDown/></span></label>
          <input type="text" value={session?.user.email} disabled className="border-1 rounded-md p-1 w-80 cursor-pointer"/>
        </div>
      </div>
      <div className="p-2 max-sm:inline hidden">
        <Logout />
      </div>
    </div>
  );
};

export default Profile;
