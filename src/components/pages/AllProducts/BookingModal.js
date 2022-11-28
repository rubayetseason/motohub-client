import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ item, setItem }) => {
  const { name, catagory, resale_price, seller, _id, image, verified } = item;
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const customer = form.customer.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      customer,
      email,
      phone,
      product: name,
      image,
      product_id: _id,
      catagory,
      resale_price,
      seller,
      verified,
    };

    fetch("https://motohub-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setItem(null);
          toast.success("Booking Confirmed");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="font-bold">Resale Price: {resale_price}</p>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                disabled
                name="customer"
                value={user?.displayName}
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={user?.email}
                disabled
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Phone Number</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="+880**********"
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                type="text"
                name="meeting"
                placeholder="Enter meeting location"
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <br />
            <input
              className="w-full btn btn-secondary"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
