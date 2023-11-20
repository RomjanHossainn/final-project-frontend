import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCarts from "../../hooks/useCarts";
const Navbar = () => {
    const {user,logOut,loading} = useContext(AuthContext)

    const [carts] = useCarts();

    

    const handleLogout = () => {
      logOut()
      .then(() => {
        console.log('Logout Success')
      })
      .catch(erorr => {
        console.log(erorr.message)
      })
    }


    const menuLinks = <>
        <li className="text-lg"><NavLink>Home</NavLink></li>
        <li className="text-lg"><NavLink>Contact Us</NavLink></li>
        <li className="text-lg"><NavLink>Dashboard</NavLink></li>
        <li className="text-lg"><NavLink to="/ourmenu">Our Menu</NavLink></li>
        <li className="text-lg"><NavLink to="/ourshop/salad">Our Shop</NavLink></li>
    </>
    return (
      <div className="navbar bg-base-100 py-5">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {menuLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        <div className="navbar-end flex-1">
          <div className="hidden md:block mr-5 ">
            <ul className=" menu-horizontal px-1 gap-5">{menuLinks}</ul>
          </div>
          <Link to="/dashboard/dsmycarts" className="btn mr-5">
            <FaCartShopping></FaCartShopping>
            <div className="badge badge-secondary">+{carts.length}</div>
          </Link>
          <div className="mr-3">
            {loading ? (
              ""
            ) : (
              <>
                <img
                  className="w-10 rounded-full h-10 mx-auto"
                  src={user? user.photoURL : ''}
                  
                  
                  alt=""
                />
                <p>{user ? user?.displayName : ""}</p>
              </>
            )}
          </div>
          {user ? (
            <a onClick={handleLogout} className="btn">
              Log out
            </a>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;