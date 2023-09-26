const Banner = () => {
  return (
    <div className="bg-[#7e90fe0d] pt-20">
      <div className="max-w-7xl mx-auto pt-16 pb-8 flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="mt-10 md:mt-0">
          <h1 className="text-7xl font-extrabold leading-tight mb-6 text-dark-1">
            One Step <br /> Closer To Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#7E90FE] to-[#9873FF]">
              Dream Job
            </span>
          </h1>
          <p className="text-lg font-medium text-dark-2 max-w-lg mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="text-xl text-white font-bold py-3.5 px-8 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg">
            Get Started
          </button>
        </div>
        <img
          className="max-w-xl"
          src="https://i.ibb.co/hd02ycD/Layer-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
