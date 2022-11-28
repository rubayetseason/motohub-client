import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../shared/Loading";

const AllBuyers = () => {
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = fetch("https://motohub-server.vercel.app/users?role=buyer");
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
        toast.success("Buyer deleted successfully");
        refetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-10 mb-10">All Buyers</h1>
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
              {buyers.map((buyer, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>{buyer.role}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;
