import Profile from "@/components/Profile";
import StateSwapProfile from "@/components/StateSwapProfile";
import UploadProduct from "@/components/UploadProduct";

const page = () => {
  return (
    <div className="w-full h-full">
      <Profile/>
      {/* <UploadProduct /> */}
      <StateSwapProfile/>
    </div>
  );
};

export default page;
