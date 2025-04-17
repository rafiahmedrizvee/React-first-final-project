import React from "react";
import worldkey from "../../../assets/images/men.png";
import worldkeyimg from "../../../assets/images/visa.jpg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const WorldKey = () => {
  return (
    <div className="my-28"
      style={{
        background: `url(${worldkeyimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor:"#00000087"
      }}
    >
      <div className=" md:flex justify-center items-center mx-20 text-white">
        <div>
          <img className="w-full -mt-22" src={worldkey} alt="education" />
        </div>
        <div className="w-1/2">
          <h2 className="text-5xl py-5">World key accross some with f1 visa</h2>
          <p className="py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae corrupti eius vitae temporibus. Expedita error quod,
            quam, corporis dicta dolorem natus doloremque sequi ab pariatur nam
            eaque maiores autem, beatae delectus iure? Repellendus similique
            quisquam ipsam aliquid, voluptatibus reiciendis tempora dolorum
            enim, dolorem error magnam saepe molestias quo? Quos deserunt illum
            voluptatum perferendis.
          </p>

          <div>
            {" "}
            <PrimaryButton>Get Appointment </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldKey;
