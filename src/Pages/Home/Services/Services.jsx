import React from "react";
import visa from "../../../assets/images/visa.jpg";
import f1visa from "../../../assets/images/immigrant.jpeg";
import tourist from "../../../assets/images/tourist.jpeg";
import Service from "./Service";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const Services = () => {

   const {
      data: services = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["all-service"],
      queryFn: async () => {
        const res = await fetch("http://localhost:7000/all-service");
        const data = await res.json();
        return data;
      },
    });
    if (isLoading){
          return <Loading/>
    }
    
  // const servicesData = [
  //   {
  //     _id: 1,
  //     name: "Visa Process",
  //     img: visa,
  //     description: "Collect your visa established fact that by the readable",
  //   },
  //   {
  //     _id: 2,
  //     name: "F1 Visa Details",
  //     img: f1visa,
  //     description: "Collect your visa established fact that by the readable",
  //   },
  //   {
  //     _id: 3,
  //     name: "Tourist Visa Process",
  //     img: tourist,
  //     description: "Collect your visa established fact that by the readable",
  //   },
  // ];

  return (
    <div className="my-10 md:my-20 mx-3 md:mx-5">
      <div className="text-center my-10">
        <h2 className="text-2xl text-primary font-semibold ">Our Service</h2>
        <h3 className="text-3xl text-secondary font-semibold ">Service We Provide</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {
                services.map((service)=>( <Service key={service._id} data= {service}></Service> ))
        }
      </div>
    </div>
  );
};

export default Services;
