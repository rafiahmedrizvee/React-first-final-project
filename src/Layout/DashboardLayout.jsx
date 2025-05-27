import React, { useContext } from "react";
import Header from "../Pages/Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>

      <div className="drawer md:drawer-open ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* Page content here */}

          <div className="p-12">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 gap-5  text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}

            <li className=" hover:bg-primary rounded-lg hover:text-white font-semibold border-1">
              <NavLink
                to="/dashboard/picked-date"
                className="font-semibold text-xl "
              >
                <p className="  ">My Picked Date </p>
              </NavLink>
            </li>
            {
            isAdmin && (
              <>
                <li className="hover:bg-primary rounded-lg hover:text-white font-semibold border-1  ">
                  <NavLink
                    to="/dashboard/all-users"
                    className="font-semibold text-xl  "
                  >
                    <p className=" ">All Users</p>
                  </NavLink>
                </li>
                <li className="hover:bg-primary rounded-lg hover:text-white font-semibold border-1  ">
                  <NavLink
                    to="/dashboard/manage-service"
                    className="font-semibold text-xl  "
                  >
                    <p className=" ">Manage Services</p>
                  </NavLink>
                </li>
                <li className="hover:bg-primary rounded-lg hover:text-white font-semibold border-1  ">
                  <NavLink
                    to="/dashboard/add-service"
                    className="font-semibold text-xl  "
                  >
                    <p className=" ">Add Services</p>
                  </NavLink>
                </li>
              </>
            )}
            {/* <li className="hover:bg-primary rounded-lg hover:text-white font-semibold border-1  ">
              <NavLink
                to="/dashboard/add-date"
                className="font-semibold text-xl  "
              >
                <p className=" ">Add Date</p>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
