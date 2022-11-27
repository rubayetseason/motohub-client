import React from "react";
import { GoVerified } from "react-icons/go";

const MyProduct = ({ product }) => {
  const { name, resale_price, original_price, catagory, image } = product;
  return (
    <div className="card card-compact border shadow-xl">
      <figure>
        <img src={image} alt="bike" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-info">
          <p className="text-start">{catagory}</p>
          <p className="text-start">Original Price: {original_price}</p>
          <p className="text-start">Resale Price: {resale_price}</p>
          <div class="badge badge-secondary flex my-2 badge-outline">
            Available
          </div>
        </div>

        <div className="card-actions justify-start">
          <button className="btn btn-accent">Advertise</button>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
