import React from "react";
import { GoVerified } from "react-icons/go";

const CatagoryProduct = ({ product, setItem }) => {
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
    use,
  } = product;
  return (
    <div className="card border-2 shadow-xl">
      <figure>
        <img src={image} className="w-[250px] h-[250px] mt-5" alt="bike" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
        <p>
          <small>Category: {catagory}</small>
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
        <p>
          <small>Date posted: {posted}</small>
        </p>
        <p className="mb-2">
          <small>Time used: {use}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setItem(product)}
            htmlFor="bookingModal"
            className="btn btn-primary btn-sm font-bold"
          >
            Book Now
          </label>
          <button className="btn btn-accent btn-sm">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default CatagoryProduct;
