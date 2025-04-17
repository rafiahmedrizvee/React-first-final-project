import React from 'react';
import education from '../../../assets/images/education.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const Explore = () => {
        return (
                <div className=" md:flex justify-center items-center m-20">
                <div>
                  <img className="w-full" src={education} alt="education" />
                </div>
                <div className="w-1/2">
                  <h2 className="text-5xl py-5">
                    Explore the world <br /> with f1 visa
                  </h2>
                  <p className="py-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
                    recusandae corrupti eius vitae temporibus. Expedita error quod, quam,
                    corporis dicta dolorem natus doloremque sequi ab pariatur nam eaque
                    maiores autem, beatae delectus iure? Repellendus similique quisquam
                    ipsam aliquid, voluptatibus reiciendis tempora dolorum enim, dolorem
                    error magnam saepe molestias quo? Quos deserunt illum voluptatum
                    perferendis.
                  </p>
                  <div>
                    <PrimaryButton>See Details F1</PrimaryButton>
                  </div>
                </div>
              </div>
        );
};

export default Explore;