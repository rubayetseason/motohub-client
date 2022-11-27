import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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
        console.log(myProducts);
      });
  }, [user?.uid, myProducts]);

  return (
    <div>
      <h1 className="text-4xl font-bold mt-10 mb-12">
        You have {myProducts.length} products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {
            myProducts.map(product => <MyProduct key={product._id} product={product}></MyProduct>)
        }
      </div>
    </div>
  );
};

export default MyProducts;
