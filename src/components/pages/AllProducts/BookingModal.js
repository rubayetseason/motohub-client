import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ item, setItem }) => {
  const { name, catagory, resale_price, seller, location } = item;
  const { user } = useContext(AuthContext);
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
          <h3 className="text-lg font-bold">{name}</h3>
          <form>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                type="text"
                disabled
                value={resale_price}
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                disabled
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
