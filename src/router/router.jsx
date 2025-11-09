import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import Hero from "../Components/Pages/HomePage/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero /> 
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <ContactUsPage />,
      },
    ],
  },
]);

export default router;
