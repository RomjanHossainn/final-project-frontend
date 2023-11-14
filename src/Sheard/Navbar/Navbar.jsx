import { NavLink } from "react-router-dom";

const Navbar = () => {
    const menuLinks = <>
        <li className="text-lg"><NavLink>Home</NavLink></li>
        <li className="text-lg"><NavLink>Contact Us</NavLink></li>
        <li className="text-lg"><NavLink>Dashboard</NavLink></li>
        <li className="text-lg"><NavLink>Our Menu</NavLink></li>
        <li className="text-lg"><NavLink>Our Shop</NavLink></li>
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
            <div>
               
            </div>
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;