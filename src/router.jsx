import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";


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
        path: "",
        element: <Packages/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
      


    ],
  },
]);

export default router;