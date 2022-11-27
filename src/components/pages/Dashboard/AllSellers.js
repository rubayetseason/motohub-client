import React from "react";

const AllSellers = () => {
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
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <button className="btn btn-outline btn-sm btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllSellers;
