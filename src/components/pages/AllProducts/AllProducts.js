import { useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "./Product";

const AllProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = fetch("http://localhost:5000/products");
      const data = await (await res).json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-5xl font-bold mt-5 mb-14">Our Products</h1>
      <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
