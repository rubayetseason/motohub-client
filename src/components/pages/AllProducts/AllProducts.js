import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllProducts = () => {
    const {data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const res = fetch("http://localhost:5000/products");
          const data = await (await res).json();
          return data;
        }
      })

  return <div>there are {products.length} products</div>;
};

export default AllProducts;
