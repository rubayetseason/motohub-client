import React from "react";
import { GoVerified } from "react-icons/go";

const Product = ({ product }) => {
  const {
    name,
    image,
    catagory,
    original_price,
    resale_price,
    seller,
    location,
    verified,
    posted,
  } = product;
  return (
    <div className="card border-2 shadow-xl">
      <figure>
        <img src={image} className="w-[250px] h-[250px] mt-5" alt="bike" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
        <p>
          <small>Category: {catagory} </small>
        </p>
        <p>Original Price: {original_price}</p>
        <p className="font-bold">
          Resale Price: {resale_price}{" "}
          <span className="badge badge-error gap-2">new</span>
        </p>
        <p className="font-bold inline">
          Seller: {seller}{" "}
          {verified ? (
            <span className="badge badge-lg">
              <GoVerified />
            </span>
          ) : (
            ""
          )}
        </p>
        <p>{location}</p>
        <p className="mb-2">
          <small>Date posted: {posted}</small>
        </p>
        <div className="card-actions justify-center">
        <label htmlFor="bookingModal" className="btn btn-primary font-bold">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default Product;
