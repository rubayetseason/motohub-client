import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-black">
        <li className="border mr-5">
          <a>My Orders</a>
        </li>
        <li className="border mr-5">
          <a>All Users</a>
        </li>
        <li className="border">
          <a>Add A Product</a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
