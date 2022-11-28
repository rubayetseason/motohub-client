import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";

const DashboardNav = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal text-accent">
        {isAdmin || isSeller ? (
          <>
            {isSeller ? (
              <>
                <li className="border border-accent mx-5 my-2">
                  <Link to="/dashboard/addproduct">Add A Product</Link>
                </li>
                <li className="border border-accent mx-5 my-2">
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            ) : (
              <>
                {isAdmin ? (
                  <>
                    {" "}
                    <li className="border border-accent mx-5 my-2">
                      <Link to="/dashboard/allbuyers">All Buyers</Link>
                    </li>
                    <li className="border border-accent mx-5 my-2">
                      <Link to="/dashboard/allsellers">All Sellers</Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <li className="border border-accent mx-5 my-2">
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>

            <li className="border border-accent mx-5 my-2">
              <Link to="/dashboard/wishlist">My Wishlist</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DashboardNav;
