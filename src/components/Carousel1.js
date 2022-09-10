import Carousel from 'react-bootstrap/Carousel';
import carousel from "./img/carousel.jpg"
import carousel1 from "./img/carousel1.jpg"
import carousel2 from "./img/carousel2.jpg"
import "./styles/Carousel.css"
import Container from 'react-bootstrap/Container';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
    <Container>
    <div className='caro'>
      <Swiper
        slidesPerView={2}
        spaceBetween={320}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img
          className='car1'
          src={carousel}
          alt="First slide"
        /></SwiperSlide>
        <SwiperSlide><img
          className='car1'
          src={carousel1}
          alt="First slide"
        /></SwiperSlide>
        <SwiperSlide><img
          className='car1'
          src={carousel2}
          alt="First slide"
        /></SwiperSlide>
       <SwiperSlide><img
          className='car1'
          src={carousel}
          alt="First slide"
        /></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      </div>
      </Container>
    </>
  );
}
