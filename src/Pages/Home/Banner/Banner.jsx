import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import hero1 from '../../../assets/images/hero1.jpg';
import hero2 from '../../../assets/images/hero2.jpg';
import hero3 from '../../../assets/images/hero3.jpg';

function Banner() {
  const slides = [hero1, hero2, hero3];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900 text-white">

{/* Hero Content */}
<div className="relative z-10 flex items-center justify-center h-[400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          <h1 className="animate__animated animate__bounce animate-duration: 2s; text-4xl md:text-6xl font-bold pb-4 drop-shadow-md">
            Welcome to the Global Online Embassy
          </h1>
          
          <p className="animate__animated animate__shakeX  text-lg md:text-xl text-gray-200 pb-6">
            Your trusted platform for connecting with embassies worldwide — services, support, and safety at your fingertips.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#32b4e7] hover:bg-[#32b4e778] rounded-full text-white font-medium shadow-lg transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="absolute inset-0 z-0"
      >
        {slides.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Slide ${idx}`} className="w-full h-[400px] object-cover " />
            <div className="absolute inset-0  bg-opacity-50" />
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}

export default Banner;
