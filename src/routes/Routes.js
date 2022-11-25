import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../components/pages/AllProducts/AllProducts";
import Catagory from "../components/pages/AllProducts/Catagory";
import Blogs from "../components/pages/Blogs/Blogs";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
import NotFound from "../components/shared/NotFound";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allproducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/catagory/:brand',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    { path: "*", element: <NotFound></NotFound> },
]);