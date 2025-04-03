import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Hotels from "./Pages/Hotels";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/Packages",
        element: <Packages/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/hotels",
        element: <Hotels/>
      },
      


    ],
  },
]);

export default router;