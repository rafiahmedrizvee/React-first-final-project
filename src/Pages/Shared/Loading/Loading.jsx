import React from "react";
import loading from "../../../assets/images/loading.gif";

const Loading = () => {
  return <div className="flex justify-center items-center min-h-50 my-5">
<img className="w-50 h-50" src={loading} alt="" />

  </div>;
};

export default Loading;
