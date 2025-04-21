import React, { useEffect, useState } from "react";
import SingleVisaAppointment from "./SingleVisaAppointment";

const VisaAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("visaAppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="mx-5">
      <div className="text-center">
        <h4 className="text-primary font-semibold">Visa Appointments </h4>
        <h3 className="text-3xl font-semibold ">Visa Appointment On : </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:my-10">

        {
appointments.map((appointment,i)=>(
<SingleVisaAppointment key={i}
appointmentOption={appointment}
></SingleVisaAppointment>

))
        }

      </div>
    </div>
  );
};

export default VisaAppointments;
