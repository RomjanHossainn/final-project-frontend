import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/ourshop/:category",
        element: <OurShop></OurShop>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path : '/register',
    element : <Register></Register>
  }
]);

export default router;