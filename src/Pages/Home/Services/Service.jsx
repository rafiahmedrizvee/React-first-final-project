import React from 'react';

const Service = ({data}) => {

        const {name, img, description} = data;

        return (
                <div className="shadow-sm">
                
                  <img className='h-64 w-full rounded-2xl'
                    src={img}
                    alt={name} />
                
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                  </div>
                </div>
              </div>    
        );
};

export default Service;