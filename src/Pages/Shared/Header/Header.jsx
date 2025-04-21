import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li className="md:text-xl text-center items-center font-semibold text-[#32b4e7] hover:bg-[#32b4e778] transform-3d hover:text-black">
        <Link to= '/' >Home</Link>
      </li>
      <li className="md:text-xl text-center items-center font-semibold text-[#32b4e7] hover:bg-[#32b4e778] hover:text-black">
        <NavLink to= '/visa' >Visa </NavLink>
      </li>
      <li className="md:text-xl text-center items-center font-semibold text-[#32b4e7] hover:bg-[#32b4e778] hover:text-black">
        <Link to= '/about' >About</Link>
      </li >
      <li className="md:text-xl text-center items-center font-semibold text-[#32b4e7] hover:bg-[#32b4e778] hover:text-black">
        <Link to= '/service' >Service</Link>
      </li >
      <li className="md:text-xl text-center items-center font-semibold text-[#32b4e7] hover:bg-[#32b4e778] hover:text-black">
        <NavLink to= '/contact' >Contact</NavLink>
      </li>
      
    </React.Fragment>
  );

  return (
    <div>
      <div className=" bg-white navbar fixed top-0 left-0 right-0 z-50 shadow-sm px-5">
        <div className="navbar-start justify-between md:justify-start w-[65%] md:w-[50%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="w-28">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {menuItems}
          </ul>
        </div>
        <div className="navbar-end w-[35%] md:w-[50%] ">
          <a className="btn">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
