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

          <div class="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
  <h2 class="text-2xl font-semibold mb-6 text-center">Appointment Form</h2>
  <form class="space-y-4">
   
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" name="name" placeholder="Name" required
             class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" name="email" placeholder="Email" required
             class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
      <input type="tel" id="phone" name="phone" placeholder="Phone" required
             class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
      <input defaultValue={date} type="date"  id="date" name="date" placeholder="Date" required
             class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

    
    <div>
      <label for="time" class="block text-sm font-medium text-gray-700">Time</label>
      <input type="time" id="time" name="time" placeholder="Time" required
             class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
    </div>

   
    <div class="pt-4">
      <button type="submit"
              class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition">
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
