import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal text-accent">
        <li className="border border-accent mx-5 my-2">
          <Link to="/dashboard/myorders">My Orders</Link>
        </li>
         
        <li className="border border-accent mx-5 my-2">
          <Link to='/dashboard/wishlist'>My Wishlist</Link>
        </li>
        <li className="border border-accent mx-5 my-2">
          <Link to="/dashboard/addproduct">Add A Product</Link>
        </li>
        <li className="border border-accent mx-5 my-2">
          <Link to="/dashboard/myproducts">My Products</Link>
        </li>
        <li className="border border-accent mx-5 my-2">
          <Link to='/dashboard/allbuyers'>All Buyers</Link>
        </li>
        <li className="border border-accent mx-5 my-2">
          <Link to='/dashboard/allsellers'>All Sellers</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
