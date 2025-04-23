import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import bannerimg from '../../../assets/images/banner.png'
import { Link } from 'react-router-dom';

function Banner() {






  return (
   <div>
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerimg}
      className="max-w-sm rounded-lg shadow-2xl md:w-1/2 h-[500px] object-cover w-full"
    />
    <section class="  py-16 px-6 md:px-12 text-center  w-full">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__slideInDown">Welcome to the Official Online Embassy Portal</h1>
    <p class="text-lg md:text-xl mb-8 animate__animated animate__zoomInDown">
      Your trusted gateway for consular services, travel documents, and citizen support — anytime, anywhere.
    </p>
    <div class="flex flex-col md:flex-row justify-center gap-4">
      <Link to='/visa' >
      <a href="#start" class="bg-white text-primary hover:text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary transition">Get Started</a>
      </Link>
     <Link to='/contact' >
     <a href="#contact" class="bg-white text-primary hover:text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary transition">Contact Us</a>
     </Link>
      <Link to='/visa'>
      <a href="#track" class="bg-white text-primary hover:text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary transition">Track Application</a>
      </Link>
    </div>
  </div>
</section>
  </div>
</div>
   </div>
  );
}

export default Banner;
