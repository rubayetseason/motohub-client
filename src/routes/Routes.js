import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../components/pages/AllProducts/AllProducts";
import Catagory from "../components/pages/AllProducts/Catagory";
import Blogs from "../components/pages/Blogs/Blogs";
import AddProduct from "../components/pages/Dashboard/AddProduct";
import AllBuyers from "../components/pages/Dashboard/AllBuyers";
import AllSellers from "../components/pages/Dashboard/AllSellers";
import MyDashboard from "../components/pages/Dashboard/MyDashboard";
import MyOrders from "../components/pages/Dashboard/MyOrders";
import MyProducts from "../components/pages/Dashboard/MyProducts";
import MyWishlist from "../components/pages/Dashboard/MyWishlist";
import Payment from "../components/pages/Dashboard/Payment";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
import NotFound from "../components/shared/NotFound";
import Main from "../layouts/Main";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "./DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/catagory/:brand",
        element: (
          <PrivateRoute>
            <Catagory></Catagory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/dashboard",
        element: <MyDashboard></MyDashboard>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/wishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);
