import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ time, setTime, selectedDate,refetch }) => {
  const { name, slots } = time;
  const date = format(selectedDate, "PPPP");

  const { user } = useContext(AuthContext);
  

 const handleAppointment =(event) =>{

        event.preventDefault();
     const form = event.target;
     const userName = form.name.value;
     const slot = form.slot.value;
     const email = form.email.value;
     const phone = form.phone.value;

     const booking = {
      
      serviceName:name,
      appointmentDate: date,
      slot,
      name:userName,
      email,phone,
     }

    //  console.log(booking);

     fetch ("http://localhost:7000/bookings",{
      method:"POST",
      headers:{
        "content-type":"application/json"

      },
      body: JSON.stringify(booking)
     })
     .then(res => res.json())
     .then(data=>{
      

      if(data.acknowledged){
        form.reset()
        toast.success('Booking Successfully Done!👏');
        setTime("")
        refetch()
        
      }
      else {
        toast.error(data.message );
       
      }
     }
     )    
 } 

  return (
<div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="book_modal" className="modal-toggle" />
<div className="modal " role="dialog">
<div className="modal-box text-black">
  <div className="flex justify-between items-start">
    <h3 className="text-lg font-bold">{name}</h3>
    <div className="">
      <label
        htmlFor="book_modal"
        className="btn rounded-full bg-primary text-white font-semibold  hover:btn btn-outline hover:bg-red-500 hover:rounded-full "
      >
        X
      </label>
    </div>
  </div>

          <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Appointment Form
            </h2>
            <form onSubmit={handleAppointment}  className="space-y-4">

            <div>
                <label
                  for="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  value={date}
                  readOnly
                  type="text"
                  placeholder="Date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="Name"
                  defaultValue={user?.displayName}
                  readOnly
                  placeholder="Name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  readOnly
                  defaultValue={user?.email}
                  placeholder="Email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  for="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  required
                  min={0}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

            

              <div>
                <label className=" label">Time</label>
                <select
                  defaultValue="Pick a Browser"
                  className="select input w-full"
                  name="slot"
                >
                  <option disabled={true}>Pick a Time</option>

                  {slots?.map((slot, i) => (
                    <option key={i}>{slot}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition"
                >
                  Pick Time
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
