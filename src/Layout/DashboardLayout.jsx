import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';


const DashboardLayout = () => {
        return (
<div >
<Header></Header> 



<div className="drawer md:drawer-open">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}

    <div className='p-12'>
        <Outlet></Outlet>
    </div>
    
  </div>
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><NavLink to ='/dashboard/picked-date' >My Picked Date</NavLink></li>
      <li><NavLink to = '/dashboard/all-users'>All Users</NavLink></li>
    </ul>
  </div>
</div>


</div>
);
};

export default DashboardLayout;