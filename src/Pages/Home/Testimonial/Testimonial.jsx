import React from "react";
import people1 from "../../../assets/images/people1.jpg";
import people2 from "../../../assets/images/people2.jpg";
import people3 from "../../../assets/images/people3.jpg";
import qoute from '../../../assets/images/qoute.png'
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Rizvee",
      img: people1,
      review: "It is a long established fact that by the readable content",
      location: "California",
    },
    {
      id: 2,
      name: "Rafi",
      img: people2,
      review: "It is a long established fact that by the readable content",
      location: "Bangladesh",
    },
    {
      id: 3,
      name: "Mazharul",
      img: people3,
      review: "It is a long established fact that by the readable content",
      location: "India",
    },
  ];

  return (

<div className="mx-4 my-20">

<div className="  flex justify-between items-start">
       <div>
        <h1 className="text-3xl text-primary">Testimonial</h1>
        <p className="text-2xl text-primary">Public Say About Us</p>
      </div>
      
        <img className="w-20 h-20" src={qoute} alt="" />

    </div>

<div className="grid md:grid-cols-3 gap-5">
        {
reviews.map((review) =>(
<Review key={review.id} data = {review}></Review>

 ))}
       </div>

</div>


//     
    


  );
};

export default Testimonial;
