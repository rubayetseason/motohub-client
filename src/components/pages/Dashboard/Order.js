import React from "react";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

const Order = ({ booking }) => {
  const {
    product,
    image,
    resale_price,
    seller,
    verified,
    customer,
    catagory,
    _id,
  } = booking;
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} className="object-cover" alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product}</h2>
        <p className="text-start font-semibold">Category: {catagory}</p>
        <p className="text-start font-semibold">Price: {resale_price}</p>
        <p className="text-start font-semibold">Customer: {customer}</p>
        <p className="text-start font-semibold">
          Seller: {seller}
          {verified ? (
            <span className="badge badge-lg">
              <GoVerified />
            </span>
          ) : (
            ""
          )}
        </p>
        <div className="card-actions justify-start">
          {resale_price && !booking.paid && (
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn glass btn-success btn-outline btn-sm">
                Pay Now
              </button>
            </Link>
          )}
          {resale_price && booking.paid && (
            <span className="text-primary font-bold">Paid</span>
          )}
          <button className="btn btn-outline btn-error btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
