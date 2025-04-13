import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icon/clock.svg'
import location from '../../../assets/icon/marker.svg'
import phone from '../../../assets/icon/phone.svg'

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Open 9.00 am to 4.00 pm 5 Days",
            image: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
          },
          {
            id: 2,
            name: "Our Location",
            description: "Baridhara, Road-13, House:321",
            image: location,
            bgClass: "bg-accent",
          },
          {
            id: 3,
            name: "Contact Us",
            description: "Open 9.00 am to 4.00 pm 5 Days",
            image: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
          },
      ];



    return (
        <div className='grid md:grid-cols-3 gap-5 py-10 px-5'>
            {
                cardData.map(info=> <InfoCard key={info.id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;