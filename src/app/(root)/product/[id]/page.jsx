import FullProductPage from "@/components/FullProductPage";

const page = async ({ params }) => {
      const {id} = await params;
  return (
      <div className="p-3">
          <FullProductPage productID={id}/>
      </div>
  );
};

export default page;
