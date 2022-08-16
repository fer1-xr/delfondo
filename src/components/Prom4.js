import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import descuento from "./img/descuentos/1.png"
import descuento1 from "./img/descuentos/2.png"
import descuento2 from "./img/descuentos/3.jpg"
import descuento3 from "./img/descuentos/4.jpg"

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
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <h2>10% OFF - Todo Agosto</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        <SwiperSlide>
      
        <Row>
        <Col><img src={descuento} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
        <Col><img src={descuento1}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}</Col>
        
      </Row>
        </SwiperSlide>
        <SwiperSlide>
        <Row>
        <Col><img src={descuento2} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
        <Col><img src={descuento3}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}</Col>
        
      </Row>
        </SwiperSlide>
       
      
        <Button variant="primary" className="ver">Ver mas</Button>{' '}
      </Swiper>
    </>
  );
}
