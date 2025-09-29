import FullProductPage from "@/components/FullProductPage";

const page =  ({ params }) => {
      const productID = params.id;
  return (
      <div className="p-3">
          <FullProductPage id={productID}/>
      </div>
  );
};

export default page;
