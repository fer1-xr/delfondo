import Carousel from 'react-bootstrap/Carousel';
import carousel from "./img/carousel.jpg"
import carousel1 from "./img/carousel1.jpg"
import carousel2 from "./img/carousel2.jpg"
import "./styles/Carousel.css"
function Carousel1() {
  return (
    <Carousel className='caro'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={carousel}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;