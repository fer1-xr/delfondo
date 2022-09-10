import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import book1 from "./img/productos mas vendidos/1.png"
import book2 from "./img/productos mas vendidos/2.png"
import book3 from "./img/productos mas vendidos/3.jpg"
import book4 from "./img/productos mas vendidos/4.jpg"
import book5 from "./img/productos mas vendidos/5.png"
import book6 from "./img/productos mas vendidos/6.jpg"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



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
        <SwiperSlide><img src={book1} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={book2}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={book1} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={book2}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
        <SwiperSlide><img src={book1} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar</Button>{' '}</SwiperSlide>
      
      </Swiper>
      </Container>
    </>
  );
}


