import Banner from "../../Components/Banner/Banner";
import JobCategory from "../../Components/JobCategory/JobCategory";
import JobList from "../../Components/JobList/JobList";

const Home = () => {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <JobCategory />
      </section>
      <section>
        <JobList />
      </section>
    </main>
  );
};

export default Home;
