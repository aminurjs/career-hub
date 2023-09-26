import Hooks from "../../Hooks/Hooks";

const JobCategory = () => {
  const categories = Hooks("category.json");
  return (
    <div className="my-28 max-w-7xl mx-auto">
      <h2 className="text-5xl text-dark-1 font-extrabold text-center mb-5">
        Job Category List
      </h2>
      <p className="text-lg text-dark-2 font-medium text-center mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {categories?.map((category) => (
          <div key={category.id} className="p-8 bg-[#7e90fe0d] rounded-md">
            <img
              className="p-4 bg-[#7e90fe1d] mb-8"
              src={category.icon}
              alt=""
            />
            <h3 className="text-xl font-extrabold text-dark-3 mb-2">
              {category.title} hello
            </h3>
            <p className="font-medium text-dark-2 mb-6">
              {category.job_available}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
