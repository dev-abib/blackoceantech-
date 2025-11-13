import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import Hero from "../Components/Pages/HomePage/Hero";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<NotFoundPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

export default router;
