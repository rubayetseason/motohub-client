import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import CatagoryProduct from "./CatagoryProduct";
import Product from "./Product";

const Catagory = () => {
  const [item, setItem] = useState(null);
  const products = useLoaderData();
  const prod = products[0].catagory;
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold my-5">Category: {prod}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5">
        {products.map((product) => (
         <CatagoryProduct key={product._id}
         product={product}
         setItem={setItem}></CatagoryProduct>
        ))}
      </div>
      <div>
        {item && <BookingModal item={item} setItem={setItem}></BookingModal>}
      </div>
    </div>
  );
};

export default Catagory;
