import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const SingleVisaAppointment = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="p-5 shadow-sm bg-primary rounded-2xl text-center">

      <div className="card-body">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>{slots.length } {slots.length > 1 ? "Spaces Available" :"Space Available"}</p>
        <Link to='/visa'>
        <PrimaryButton>Book Your Appointment</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default SingleVisaAppointment;
