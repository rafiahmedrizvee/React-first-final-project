import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import hero1 from '../../../assets/images/hero1.jpg';
import hero2 from '../../../assets/images/hero2.jpg';
import hero3 from '../../../assets/images/hero3.jpg';
import bannerimg from '../../../assets/images/banner.png'

function Banner() {






  return (
   <div>
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerimg}
      className="max-w-sm rounded-lg shadow-2xl w-1/2 h-[500px] object-cover"
    />
    <section class="  py-16 px-6 md:px-12 text-center w-1/2">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to the Official Online Embassy Portal</h1>
    <p class="text-lg md:text-xl mb-8">
      Your trusted gateway for consular services, travel documents, and citizen support — anytime, anywhere.
    </p>
    <div class="flex flex-col md:flex-row justify-center gap-4">
      <a href="#start" class="bg-white text-blue-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition">Get Started</a>
      <a href="#contact" class="border border-white py-3 px-6 rounded-xl hover:bg-white hover:text-blue-700 transition">Contact Us</a>
      <a href="#track" class="border border-white py-3 px-6 rounded-xl hover:bg-white hover:text-blue-700 transition">Track Application</a>
    </div>
  </div>
</section>
  </div>
</div>
   </div>
  );
}

export default Banner;
