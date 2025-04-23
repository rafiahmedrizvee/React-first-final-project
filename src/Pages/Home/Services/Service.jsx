import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";


const Service = ({ data }) => {
  const { name, img, description } = data;

  return (
    <div className="shadow-sm bg-primary p-4 rounded-2xl">
      <img className="h-64 w-full rounded-2xl" src={img} alt={name} />

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
         
<Link to="/visa" >
<PrimaryButton >Get Started</PrimaryButton></Link>

         
        </div>
      </div>
    </div>
  );
};

export default Service;
