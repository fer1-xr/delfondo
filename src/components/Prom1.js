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
      <h2>10% OFF - Productos mas vendidos</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        <SwiperSlide>
      
        <Row>
        <Col><img src={book1} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
        <Col><img src={book2}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
      </Row>
        </SwiperSlide>
        
      
        <SwiperSlide>
        <Row>
        <Col><img src={book3} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
        <Col><img src={book4}className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
       
      </Row>
        </SwiperSlide>
        
      
        <SwiperSlide>
        <Row>
        <Col><img src={book5} className="caro1"/>
        <p className="title">Jane Austen</p>
        <p>3500USD</p>
        <Button variant="warning">Agregar al carrito</Button>{' '}
        </Col>
        <Col><img src={book6} className="caro1"/>
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
