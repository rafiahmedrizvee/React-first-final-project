import React, { useEffect, useState } from "react";
import SingleVisaAppointment from "./SingleVisaAppointment";
import BookingModal from "../BookingModal/BookingModal";
import { format } from "date-fns";

const VisaAppointments = ({selectedDate,}) => {
  const [appointments, setAppointments] = useState([]);
  const [time, setTime] = useState({});

  const date = format (selectedDate,'PPPP')

  useEffect(() => {
    fetch("visaAppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="mx-5">
      <div className="text-center">
        <h4 className="text-primary font-semibold">Visa Appointments </h4>
        <h3 className="text-3xl font-semibold ">Visa Appointment On : {date} </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:my-10 my-5">

        {
appointments.map((appointment,i)=>(
<SingleVisaAppointment key={i}
appointmentOption={appointment}
setTime = {setTime}
></SingleVisaAppointment>

))
        }

      </div>
<BookingModal time= {time} date={date} ></BookingModal>

    </div>
  );
};

export default VisaAppointments;
