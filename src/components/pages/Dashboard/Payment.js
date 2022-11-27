import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const { product, resale_price, image } = booking;
  console.log(booking);

  return (
    <div className="w-3/4 mx-auto mt-10 mb-20">
        <img src={image} className='w-[310px] mx-auto mb-5 border p-4' alt="" />
      <h3 className="text-2xl font-semibold">Payment for {product}</h3>
      <p className="mt-4">
        <strong className="bg-red-600 p-2">BDT {resale_price}</strong> is due for your product
      </p>
      <div className="w-1/2 mx-auto border px-6 py-4 mt-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
