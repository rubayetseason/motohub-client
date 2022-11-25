import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Catagory = () => {
  const products = useLoaderData();
const prod = products[0].catagory;
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold my-5">Category: {prod}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
