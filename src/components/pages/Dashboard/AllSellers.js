import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../shared/Loading";

const AllSellers = () => {
  const { data: sellers = [], isLoading, refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = fetch("http://localhost:5000/users?role=seller");
      const data = await (await res).json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }


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
                  <th>{i+1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  <td>
                    <button className="btn btn-outline btn-sm btn-error">
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
