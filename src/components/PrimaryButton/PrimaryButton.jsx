import React from "react";

const PrimaryButton = ({children}) => {
  return (
  
      <button className="bg-[#32b4e7] px-6 py-3 rounded-full hover:bg-[#2a5f75] text-white font-semibold">
        {children}
      </button>
    
  );
};

export default PrimaryButton;
