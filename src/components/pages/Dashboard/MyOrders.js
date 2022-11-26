import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../shared/Loading";
import Order from "./Order";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold mt-10 mb-5">
          You have {bookings.length} orders
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 my-5">
          {bookings.map((booking) => (
            <Order key={booking._id} booking={booking}></Order>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
