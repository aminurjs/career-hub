import { Link } from "react-router-dom";
import Hooks from "../../Hooks/Hooks";
import Button from "../Button/Button";
import Job from "./Job";

const JobList = () => {
  const jobs = Hooks("joblist.json");
  return (
    <div className="my-28 max-w-7xl mx-auto">
      <h2 className="text-5xl text-dark-1 font-extrabold text-center mb-5">
        Featured Jobs
      </h2>
      <p className="text-lg text-dark-2 font-medium text-center mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs?.slice(0, 4).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/jobs">
          <Button text={"See All Jobs"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default JobList;
