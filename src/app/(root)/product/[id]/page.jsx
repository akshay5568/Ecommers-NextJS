import FullProductPage from "@/components/FullProductPage";

const page = ({ params }) => {
  return (
      <div className="p-3">
          <FullProductPage id={params.id}/>
      </div>
  );
};

export default page;
