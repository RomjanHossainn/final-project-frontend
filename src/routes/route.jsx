import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import DsMyCarts from "../pages/Dashboard/MyCarts/DsMyCarts";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import ReserVation from "../pages/Dashboard/ReserVation/ReserVation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";




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
        element: (
          <PrivetRoute>
            <OurShop></OurShop>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard/dsmycarts",
        element: <DsMyCarts></DsMyCarts>,
      },
      {
        path: "/dashboard/addreview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/dashboard/userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/reservation",
        element: <ReserVation></ReserVation>,
      },
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/mybookings",
        element: <MyBookings></MyBookings>,
      },
      
    ],
  },
]);



export default router;