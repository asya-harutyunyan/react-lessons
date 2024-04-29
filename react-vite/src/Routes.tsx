import { useRoutes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    { path: "about/:userId", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <h1>Not found</h1> },
  ]);
}

export default Routes;
