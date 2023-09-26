import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Jobs from "../Pages/Jobs/Jobs";
import JobPage from "../Pages/JobPage/JobPage";
import Error from "../Pages/Error/Error";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "job/:id",
        element: <JobPage />,
      },
    ],
  },
]);

export default MyRoute;
