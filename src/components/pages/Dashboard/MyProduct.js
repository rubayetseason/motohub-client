import React from "react";

const MyProduct = ({ product, handleAdvertise ,handleDelete }) => {
  const { name, resale_price, original_price, catagory, image, _id } = product;
  return (
    <div className="card card-compact border shadow-xl">
      <figure>
        <img src={image} className='h-[250px] p-2' alt="bike" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-info">
          <p className="text-start">{catagory}</p>
          <p className="text-start">Original Price: {original_price}</p>
          <p className="text-start">Resale Price: {resale_price}</p>
          <div className="badge badge-secondary flex my-2 badge-outline">
            Available
          </div>
        </div>

        <div className="card-actions justify-start">
          <button
            onClick={() => handleAdvertise(product)}
            className="btn btn-primary"
          >
            Advertise
          </button>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
