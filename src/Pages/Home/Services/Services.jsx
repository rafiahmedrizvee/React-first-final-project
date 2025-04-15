import React from "react";
import visa from "../../../assets/images/visa.jpg";
import f1visa from "../../../assets/images/immigrant.jpeg";
import tourist from "../../../assets/images/tourist.jpeg";
import education from "../../../assets/images/education.jpg";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      _id: 1,
      name: "Visa Process",
      img: visa,
      description: "Collect your visa established fact that by the readable",
    },
    {
      _id: 2,
      name: "F1 Visa Details",
      img: f1visa,
      description: "Collect your visa established fact that by the readable",
    },
    {
      _id: 3,
      name: "Tourist Visa Process",
      img: tourist,
      description: "Collect your visa established fact that by the readable",
    },
    {
      _id: 4,
      name: "Tourist Visa Process",
      img: education,
      description: "Collect your visa established fact that by the readable",
    },
  ];

  return (
    <div className="my-10 md:my-20 mx-3 md:mx-5">
      <div className="text-center my-10">
        <h2 className="text-xl">Our Service</h2>
        <h3 className="text-3xl">Service We Provide</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {
                servicesData.map(service=> <Service key={service._id} data= {service}></Service> )
        }
      </div>
    </div>
  );
};

export default Services;
