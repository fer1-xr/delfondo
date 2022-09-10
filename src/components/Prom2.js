import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import promo from "./img/amistad/promo.png"
import promo1 from "./img/amistad/promo1.png"
import promo2 from "./img/amistad/promo2.png"
import  promo3 from "./img/amistad/promo3.jpg"
import promo4 from "./img/amistad/promo4.jpg"
import promo5 from "./img/amistad/promo5.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  "./styles/Prom1.css"


// import required modules
import { Autoplay,Pagination } from "swiper";

export default function App() {
  return (
    <>
    <Container>
    <h2>10% OFF - Productos mas vendidos</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={promo1} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={promo2}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={promo3} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={promo4}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={promo5} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
      
      </Swiper>
      </Container>
    </>
  );
}

