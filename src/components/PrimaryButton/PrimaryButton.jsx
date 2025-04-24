import React from "react";

const PrimaryButton = ({children}) => {
  return (
  
      <button className="border-2 btn btn-xs  md:btn-md lg:btn-lg text-white bg-primary shadow-xl w-full hover:bg-secondary">
        {children}
      </button>
    
  );
};

export default PrimaryButton;
