import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import promo from "./img/amistad/promo.png"
import promo1 from "./img/amistad/promo1.png"
import promo2 from "./img/amistad/promo2.png"
import  promo3 from "./img/amistad/promo3.jpg"
import promo4 from "./img/amistad/promo4.jpg"
import promo5 from "./img/amistad/promo5.png"

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
      <h2>Libros para regalar </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        <SwiperSlide>
      
        <Row>
        <Col><img src={promo} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
        <Col><img src={promo1}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
      </Row>
        </SwiperSlide>
        <SwiperSlide>
        <Row>
        <Col><img src={promo2} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
        <Col><img src={promo3}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
      </Row>
        </SwiperSlide>
        <SwiperSlide>
        <Row>
        <Col><img src={promo4} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
        <Col><img src={promo5} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
        
      </Row>
        </SwiperSlide>
      
        <Button variant="primary" className="ver">Ver mas</Button>{' '}
      </Swiper>
    </>
  );
}
