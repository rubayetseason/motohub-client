import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-black">
        <li className="border mr-5">
          <Link to='/dashboard/myorders'>My Orders</Link>
        </li>
        <li className="border mr-5">
          <Link>My Products</Link>
        </li>
        <li className="border mr-5">
          <Link>All Users</Link>
        </li>
        <li className="border">
          <Link>Add A Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
