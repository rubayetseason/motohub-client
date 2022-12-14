import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const catagory = form.catagory.value;
    const location = form.location.value;
    const resale_price = form.resale.value;
    const original_price = form.original.value;
    const use = form.use.value;
    const seller = form.seller.value;
    const posted = new Date().toLocaleDateString();
    const uid = user.uid;

    const product = {
      name,
      image,
      catagory,
      location,
      resale_price,
      original_price,
      use,
      posted,
      seller,
      verified: false,
      uid,
    };

    fetch("https://motohub-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully");
          navigate();
        }
        console.log("posted product", data);
      });
  };
  return (
    <div>
      <h1 className="text-4xl mt-10 mb-5 font-bold">Add Product Here</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Product name here"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Product image URL</span>
            </label>
            <input
              required
              type="text"
              name="image"
              placeholder="Photo URL"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Pick the category</span>
            </label>
            <select name="catagory" className="select select-secondary">
              <option>100cc</option>
              <option>125cc</option>
              <option>150cc</option>
            </select>
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Product location</span>
            </label>
            <input
              required
              type="text"
              name="location"
              placeholder="Enter location here"
              className="input input-bordered input-secondary w-full "
            />
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              required
              type="number"
              name="original"
              placeholder="Enter price here"
              className="input input-bordered input-secondary w-full "
            />
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              required
              type="number"
              name="resale"
              placeholder="Enter price here"
              className="input input-bordered input-secondary w-full "
            />
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Time of use</span>
            </label>
            <input
              required
              type="text"
              name="use"
              placeholder="How many years?"
              className="input input-bordered input-secondary w-full "
            />
          </div>
          <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="seller"
              value={user?.displayName}
              disabled
              placeholder="Type here"
              className="input input-bordered input-secondary w-full "
            />
          </div>
        </div>
        <div className="mt-5 w-3/4 mx-auto">
          <button className="btn btn-outline btn-accent w-3/4 mx-auto">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
