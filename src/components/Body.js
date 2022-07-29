import Carousel from 'react-bootstrap/Carousel';
import product1 from "./img/product1.jpg"
import product2 from "./img/product2.jpg"
import product3 from "./img/product3.jpg"
import promo from "./img/promo.png"
import promo1 from "./img/promo1.png"
import promo2 from "./img/promo2.png"
import "./styles/body.css"
function CarouselFadeExample() {
  return (
    <div className='container'>


<h2>10% OFF - Productos mas vendidos</h2>
    
    <Carousel fade variant="dark">
      
      <Carousel.Item>
      
        <img className="d-block w-100" src={product1} alt="First slide"/>
        <Carousel.Caption>
      <button className='btgn'>button</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={product2} alt="Second slide"/>

        <Carousel.Caption>
        <button className='btgn'>button</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={product3}
          alt="Third slide"
        />

        <Carousel.Caption>
         <button className='btgn'>button</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <h2>Promo dia de la amistaf 30% OFF</h2>
    <Carousel fade variant="dark">
      
      <Carousel.Item>
      
        <img className="d-block img" src={promo} alt="First slide"/>
        <Carousel.Caption>
      <button className='btgn'>button</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={promo1} alt="Second slide"/>

        <Carousel.Caption>
        <button className='btgn'>button</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={promo2}
          alt="Third slide"
        />

        <Carousel.Caption>
         <button className='btgn'>button</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;