import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <div className="p-10 flex flex-col border border-gray-200 shadow-md">
      <div className="flex-grow">
        <img className="max-w-[200px]" src={job.brand_logo} alt="" />
      </div>
      <h2 className="text-2xl font-extrabold text-dark-3 mt-8 mb-3">
        {job.job_title}
      </h2>
      <h2 className="text-xl font-medium text-dark-2 mb-4">{job.brand}</h2>
      <div className="mb-3">
        <button className="font-extrabold text-[#7E90FE] px-6 py-2.5 border-2 border-[#7E90FE] rounded mr-5">
          Remote
        </button>
        <button className="font-extrabold text-[#7E90FE] px-6 py-2.5 border-2 border-[#7E90FE] rounded">
          Full Time
        </button>
      </div>
      <p className="mb-6 text-xl text-dark-2 font-semibold">
        <span className="mr-6">
          <CiLocationOn className="inline mr-2 text-xl"></CiLocationOn>
          {job.location}
        </span>
        <span>
          <AiOutlineDollar className="inline mr-2 text-2xl"></AiOutlineDollar>
          Salary : {job.salary}
        </span>
      </p>
      <Link to={`/job/${job.id}`}>
        <Button text={"View Details"}></Button>
      </Link>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
