import Job from "../../Components/JobList/Job";
import Hooks from "../../Hooks/Hooks";

const Jobs = () => {
  const jobs = Hooks("joblist.json");
  return (
    <>
      <div className="bg-[url(https://i.ibb.co/Fhf9BvJ/Group-10022.png)] bg-cover bg-center pt-36 pb-20">
        <h2 className="text-4xl text-dark-1 font-extrabold text-center mb-5">
          Your Dream is Here
        </h2>
      </div>
      <div className="my-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobs?.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
