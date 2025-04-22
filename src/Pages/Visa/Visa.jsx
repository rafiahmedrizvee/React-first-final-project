import React, { useState } from "react";
import VisaBanner from "./VisaBanner/VisaBanner";
import VisaAppointments from "./VisaAppointments/VisaAppointments";

const Visa = () => {
  const [selectedDate, setselectedDate] = useState (new Date());
  return (
    <div>
      <VisaBanner selectedDate={selectedDate} setselectedDate={setselectedDate} ></VisaBanner>
      <VisaAppointments selectedDate={selectedDate}></VisaAppointments>
    </div>
  );
};

export default Visa;
