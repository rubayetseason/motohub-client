import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);

  const { data: wishlists = [], isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = fetch(`http://localhost:5000/wishlist?uid=${user?.uid}`);
      const data = await (await res).json();
      return data;
    },
  });
  console.log(wishlists);

  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to your wishlist</h1>
    </div>
  );
};

export default MyWishlist;
