import { useParams } from "react-router-dom";
import Hooks from "../../Hooks/Hooks";

const JobPage = () => {
  const jobs = Hooks("../joblist.json");
  const { id } = useParams();
  let findJob = jobs?.find((job) => job.id == id);
  if (!findJob) {
    return;
  }

  return (
    <>
      <div className="bg-[url(https://i.ibb.co/Fhf9BvJ/Group-10022.png)] bg-cover bg-center pt-36 pb-20">
        <h2 className="text-4xl text-dark-1 font-extrabold text-center mb-5">
          <img
            className="inline-block mb-3 max-w-[200px]"
            src={findJob.brand_logo}
            alt=""
          />
        </h2>
      </div>
      <div className="my-20 p-5 max-w-7xl mx-auto flex gap-6 flex-col md:flex-row">
        <div className="md:w-2/3">
          <p className="leading-normal tracking-wide text-dark-2 font-medium mb-6">
            <span className="text-lg text-dark-1 font-extrabold">
              Job Description:
            </span>{" "}
            {findJob.job_description}
          </p>
          <p className="leading-normal tracking-wide text-dark-2 font-medium mb-6">
            <span className="text-lg text-dark-1 font-extrabold">
              Job Responsibility:
            </span>{" "}
            {findJob.job_responsibility}
          </p>
          <p className="leading-normal tracking-wide text-dark-2 font-medium mb-6">
            <span className="text-lg text-dark-1 font-extrabold mb-3 block">
              Educational Requirements:
            </span>
            {findJob.educational_requirements}
          </p>
          <p className="leading-normal tracking-wide text-dark-2 font-medium mb-6">
            <span className="text-lg text-dark-1 font-extrabold mb-3 block">
              Experiences:
            </span>
            {findJob.experiences}
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="p-7 bg-[#7e90fe1a] rounded mb-8">
            <h2 className="text-lg text-dark-1 font-extrabold pb-5 mb-5 border-b border-gray-200">
              Job Details
            </h2>
            <p className="leading-normal tracking-wide text-dark-2 font-medium mb-3">
              <span className="text-lg text-dark-1 font-extrabold">
                Salary:
              </span>{" "}
              {findJob.salary}
            </p>
            <p className="leading-normal tracking-wide text-dark-2 font-medium mb-3">
              <span className="text-lg text-dark-1 font-extrabold">
                Job Title:
              </span>{" "}
              {findJob.job_title}
            </p>
            <h2 className="text-lg text-dark-1 font-extrabold pb-5 mb-5 border-b border-gray-200 mt-6">
              Contact Information
            </h2>
            <p className="leading-normal tracking-wide text-dark-2 font-medium mb-3">
              <span className="text-lg text-dark-1 font-extrabold">Phone:</span>{" "}
              {findJob.phone}
            </p>
            <p className="leading-normal tracking-wide text-dark-2 font-medium mb-3">
              <span className="text-lg text-dark-1 font-extrabold">Email:</span>{" "}
              {findJob.email}
            </p>
            <p className="leading-normal tracking-wide text-dark-2 font-medium mb-3">
              <span className="text-lg text-dark-1 font-extrabold">
                Address:
              </span>{" "}
              {findJob.location}
            </p>
          </div>
          <button className="w-full text-xl text-white font-bold py-3.5 px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobPage;
