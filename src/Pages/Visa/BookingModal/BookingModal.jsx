import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ time, selectedDate }) => {
const { name, slots } = time;
const date = format(selectedDate, "PPPP");

const {user} = useContext(AuthContext)
console.log(user, "from visa page");


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
<form className="space-y-4">
<div>
<label
for="name"
className="block text-sm font-medium text-gray-700"
>
Name
</label>
<input
type="name"
defaultValue={user?.displayName}
placeholder="Name"

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
defaultValue={user?.email}
placeholder="Email"
required
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
placeholder="Phone"
required
min={0}
className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
/>
</div>

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
<label className=" label">Time</label>
<select
defaultValue="Pick a Browser"
className="select input w-full"
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
