import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import BookingModal from "./BookingModal";
import CatagoryProduct from "./CatagoryProduct";

const Catagory = () => {
  const {user} = useContext(AuthContext);
  const [item, setItem] = useState(null);
  const products = useLoaderData();
  const prod = products[0].catagory;

  const handleWishlist = product => {
    product.uid = user?.uid;
    
    console.log(product);

fetch("http://localhost:5000/wishlist", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(product),
})
  .then((res) => res.json())
  .then((data) => {
    if(data.acknowledged){
      toast.success('Added to wishlist')
    }
    console.log("posted product", data);
  });

  };

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold my-5">Category: {prod}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5">
        {products.map((product) => (
          <CatagoryProduct
            key={product._id}
            product={product}
            setItem={setItem}
            handleWishlist={handleWishlist}
          ></CatagoryProduct>
        ))}
      </div>
      <div>
        {item && <BookingModal item={item} setItem={setItem}></BookingModal>}
      </div>
    </div>
  );
};

export default Catagory;
