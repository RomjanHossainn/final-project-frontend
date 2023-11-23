import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePreview } from "react-icons/md";
import { FaBook, FaCartShopping, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { TfiMoney } from "react-icons/tfi";
import { TbBrandBooking } from "react-icons/tb";
import { BsLifePreserver } from "react-icons/bs";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
  

    // const [isAdmin] = useAdmin();
    const [isAdmin,isPending] = useAdmin();

    if(isPending){
      return 'Loading....'
    }



    return (
      <div className="flex">
        <div className="border w-64 bg-orange-300 min-h-screen">
          <div className="text-center">
            <h1 className="font-bold text-2xl">BISTRO BOSS</h1>
            <h2 className="font-semibold text-lg">Restaurant</h2>
          </div>
          <ul className="ms-11 border-b-2 pb-8 space-y-3 mt-8">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to={"/dashboard/adminhome"}
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <IoMdHome className="text-2xl"></IoMdHome>
                      <h5>Admin Home</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/additems"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <FaUtensils className="text-2xl"></FaUtensils>
                      <h5>Add Items</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageitem"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <FaList className="text-2xl"></FaList>
                      <h5>Manage Items</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managebooking"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <FaBook className="text-2xl"></FaBook>
                      <h5>Manage Bookings</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allusers"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <FaUsers className="text-2xl"></FaUsers>
                      <h5>All Users</h5>
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/mybookings"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <TbBrandBooking className="text-2xl"></TbBrandBooking>
                      <h5>mybookings</h5>
                    </div>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to={"/dashboard/userhome"}
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <IoMdHome className="text-2xl"></IoMdHome>
                      <h5>User Home</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <BsLifePreserver className="text-2xl"></BsLifePreserver>
                      <h5>reservation</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addreview"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <MdOutlinePreview className="text-2xl"></MdOutlinePreview>
                      <h5>add review</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/dsmycarts"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <FaCartShopping className="text-2xl"></FaCartShopping>
                      <h5>My Carts</h5>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymenthistory"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <TfiMoney className="text-2xl"></TfiMoney>
                      <h5>paymenthistory</h5>
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/mybookings"
                    className={"[&.active]:text-white"}
                  >
                    <div className="flex gap-2  items-center">
                      <TbBrandBooking className="text-2xl"></TbBrandBooking>
                      <h5>mybookings</h5>
                    </div>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="ms-11 py-8">
            <li>
              <NavLink to="/">
                <div className="flex gap-3 items-center">
                  <IoMdHome className="text-2xl"></IoMdHome>
                  <p>Home</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="border flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;