import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../shared/Loading";

const AllSellers = () => {
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = fetch("https://motohub-server.vercel.app/users?role=seller");
      const data = await (await res).json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    fetch(`https://motohub-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Seller deleted successfully");
        refetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-10 mb-10">All Sellers</h1>
      <section className="px-5 mb-20">
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(seller._id)}
                      className="btn btn-outline btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllSellers;
