import React, { useState } from "react";
import SingleVisaAppointment from "./SingleVisaAppointment";
import BookingModal from "../BookingModal/BookingModal";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const VisaAppointments = ({ selectedDate }) => {
  const date = format(selectedDate, "PPPP");

  const [time, setTime] = useState({});

  const {
    data: appointments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointments", date],
    queryFn: async () => {
      const res = await fetch(
        `https://visa-embassy-server.vercel.app/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-5">
      <div className="text-center">
        <h4 className="text-primary font-semibold">Visa Appointments </h4>
        <h3 className="text-3xl font-semibold ">Visa Appointment On :{date}</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:my-10 my-5">
        {appointments.map((appointment, i) => (
          <SingleVisaAppointment
            key={i}
            appointmentOption={appointment}
            setTime={setTime}
          ></SingleVisaAppointment>
        ))}
      </div>
      {time && (
        <BookingModal
          time={time}
          setTime={setTime}
          selectedDate={selectedDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default VisaAppointments;
