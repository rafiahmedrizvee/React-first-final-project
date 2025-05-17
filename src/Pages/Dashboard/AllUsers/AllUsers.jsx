import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/users");
      const data = await res.json();
      return data;
    }
  });


  const handleMakeAdmin = (id)=>{
        fetch(`http://localhost:7000/users/admin/${id}`,{
                method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
                if(data.modifiedCount > 0){
                        toast.success("Make Admin Successfully")
                }
        })
        
  }

  return (
    <div>
      <h1 className="text-3xl mb-5">All users {users.length} </h1>
       <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="bg-primary text-white font-bold">
        <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      
      {
        users?.map((user,i )=><tr key={i} className="hover:bg-base-300 text-black">
        <th>{i+1} </th>
        <td>{user.name} </td>
        <td>{user.email}</td>
        
        <td>
                {
                        user.role ? <p>Admin</p> : <button onClick={()=> handleMakeAdmin (user._id)}
  className="btn btn-sm btn-success btn-outline "
>
  Make Admin
</button>
                } 

                 </td>

        <td><a
  className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
  href="#"
>
  <span className="absolute inset-0 border border-red-600"></span>
  <span
    className="block border border-red-600 text-black px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 hover:bg-red-600 hover:text-white"
  >
    Delete
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

export default AllUsers;
