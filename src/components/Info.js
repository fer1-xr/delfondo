import React from 'react'
import delivery from "./img/delivery.svg"
import discount from "./img/discount.svg"
import card from "./img/card.svg"
import "./styles/info.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row className='roww'>
        <Col xs={8} md={4}> <img src={delivery} alt="delivery" className='delivery'/>
                <p className='paragraph'>Envios gratis</p>
                <p>A partir de 4.000 gs </p></Col>
        <Col xs={8} md={4}> <img src={card} alt="card credit" className='card001'/>
                <p className='paragraph'>Hasta 18 cuotas sin interés</p>
                <p>Con tarjetas seleccionadas</p></Col>
        <Col xs={8} md={4}>
                  <img src={discount} alt="price discount" className='discount'/>
                <p className='paragraph'>5% de descuento en tu compra</p>
                <p>Pagando con transferencia bancaria</p></Col>
      </Row>
     
    </Container>
  );
}

export default ResponsiveAutoExample;