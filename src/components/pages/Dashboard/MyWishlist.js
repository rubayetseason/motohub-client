import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../shared/Loading";
import BookingModal from "../AllProducts/BookingModal";
import Product from "../AllProducts/Product";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState(null);

  const { data: wishlists = [], isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = fetch(`http://localhost:5000/wishlist?uid=${user?.uid}`);
      const data = await (await res).json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-4xl mt-16 mb-10 font-bold">
        Welcome to your wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {wishlists.map((wishlist) => (
          <Product
            key={wishlist._id}
            setItem={setItem}
            product={wishlist}
          ></Product>
        ))}
      </div>
      <div>
        {item && <BookingModal item={item} setItem={setItem}></BookingModal>}
      </div>
    </div>
  );
};

export default MyWishlist;
