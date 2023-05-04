import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Layout from "../Layout/Layout";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ChefDetailsPage from "../pages/ChefDetailsPage/ChefDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/"),
      },
      {
        path: "chefrecipes/:id",
        element: <ChefDetailsPage></ChefDetailsPage>,
        // loader: () => fetch("http://localhost:3000/"),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
