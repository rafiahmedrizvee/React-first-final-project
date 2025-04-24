import React, { useState } from "react";

const SingleVisaAppointment = ({ appointmentOption, setTime }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="px-4 py-2 shadow-sm bg-primary rounded-xl text-center text-white">
      <div className="card-body">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length}{" "}
          {slots.length > 1 ? "Spaces Available" : "Space Available"}
        </p>
        <label
          htmlFor="book_modal"
          className="border-2 btn btn-xs  md:btn-md lg:btn-lg text-white bg-primary shadow-xl w-full hover:bg-secondary"
          onClick={() => setTime(appointmentOption)}
        >
          Pick a Time
        </label>
      </div>

      {/* The button to open modal */}
    </div>
  );
};

export default SingleVisaAppointment;
