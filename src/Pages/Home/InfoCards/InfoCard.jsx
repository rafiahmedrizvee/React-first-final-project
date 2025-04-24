import React from 'react';

const InfoCard = ({info}) => {
    const {name,description,image,bgClass} = info;
    return (
        <div className={`${bgClass} hover:bg-secondary text-white
        rounded-2xl flex p-4 items-center shadow-sm`}>
  
  <div className="card-body items-center">
  <figure>
    <img
      src={image}
      alt={name} />
  </figure>
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
    );
};

export default InfoCard;