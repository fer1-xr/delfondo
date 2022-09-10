import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import product1 from "./img/colecciones/product1.jpg"
import product2 from "./img/colecciones/product2.jpg"
import product3 from "./img/colecciones/product3.jpg"
import product4 from "./img/colecciones/product4.jpg"
import product5 from "./img/colecciones/product5.jpg"
import product6 from "./img/colecciones/product6.jpg"
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
        <SwiperSlide><img src={product1} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={product2}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={product3} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={product4}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={product4} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={product3} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
      </Swiper>
      </Container>
    </>
  );
}

