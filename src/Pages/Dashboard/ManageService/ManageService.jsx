import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const ManageService = () => {
  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-service"],
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/all-service");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading){
        return <Loading/>
  }

  return (
    <div>
      <h1 className="text-3xl mb-5">Manage Services </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="bg-primary text-white font-bold">
              <th>Serial</th>
              <th>Image</th>
              <th>Service Name</th>  
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service, i) => (
              <tr key={i} className="hover:bg-base-300 text-black">
                <th>{i + 1} </th>
                 <td>
                  <img className="w-30 h-22 rounded-full p-1 border-1 border-primary " src={`data:image/*;base64,${service.img}`} alt="image"/>
                </td>

                <td>{service.name} </td>
                <td className="text-justify">{service.des}</td>

               

                <td className="">
                        <button className="btn btn-sm btn-success btn-outline mb-4">
                        Update
                  </button>
                  <a
                    className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
                    href="#"
                  >
                    <span className="absolute inset-0 border border-red-600"></span>
                    <span className="block border border-red-600 text-black px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 hover:bg-red-600 hover:text-white">
                      Delete
                    </span>
                  </a>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
