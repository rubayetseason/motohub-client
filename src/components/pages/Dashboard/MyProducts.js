import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products?uid=${user?.uid}`)
      .then((data) => {
        const productList = data.data;
        setMyProducts(productList);
      });
  }, [user?.uid, myProducts]);

  const handleAdvertise = (product) => {
    console.log(product);

    fetch("http://localhost:5000/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product advertised successfully");
        }
      });
  };

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product deleted successfully");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-10 mb-12">
        You have {myProducts.length} products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {myProducts.map((product) => (
          <MyProduct
            key={product._id}
            product={product}
            handleAdvertise={handleAdvertise}
            handleDelete={handleDelete}
          ></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
