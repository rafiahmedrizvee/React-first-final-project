import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const PickedDate = () => {

        const {user} = useContext(AuthContext)
        const email = user?.email;
        const {data:bookings= [],refetch,isLoading } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () =>{
        const res = await fetch(`http://localhost:7000/bookings?email=${email}`);
        const data = await res.json()
        return data
} })

if (isLoading){
  return <Loading/>
}
        

  return (
    <div>
      <h1 className="text-3xl mb-5 ">My Picked Date </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="bg-primary text-white font-bold">
        <th>Serial</th>
        <th>Service Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      
      {
        bookings?.map((booking,i )=><tr key={booking._id} className="hover:bg-primary hover:text-white">
        <th>{i+1} </th>
        <td>{booking.serviceName} </td>
        <td>{booking.appointmentDate}</td>
        <td>{booking.slot} </td>
        <td><a
  className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
  href="#"
>
  <span className="absolute inset-0 border border-red-600"></span>
  <span
    className="block border border-red-600 text-black px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 hover:bg-red-600 hover:text-white"
  >
    Cancel
  </span>
</a> </td>
      </tr>)
      }


    </tbody>
  </table>
</div>
    </div>
  );
};

export default PickedDate;
