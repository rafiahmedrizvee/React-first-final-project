import React from "react";

const BookingModal = ({time,date}) => {

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="book_modal" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box text-black">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">{time.name}</h3>
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
  <h2 className="text-2xl font-semibold mb-6 text-center">Appointment Form</h2>
  <form className="space-y-4">
   
    <div>
      <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" name="name" placeholder="Name" required
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" name="email" placeholder="Email" required
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="phone" className="block text-sm font-medium text-gray-700">Phone</label>
      <input type="tel" id="phone" name="phone" placeholder="Phone" required
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="date" className="block text-sm font-medium text-gray-700">Date</label>
      <input value={date} 
      type="date"  id="date" name="date" placeholder="Date" required
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="time" className="block text-sm font-medium text-gray-700">Time</label>
      <input type="time" id="time" name="time" placeholder="Time" required
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

   
    <div className="pt-4">
      <button type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition">
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
