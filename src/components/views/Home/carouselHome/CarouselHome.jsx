import { Carousel } from "react-bootstrap";
import './carouselHome.css'

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carrusel"
            src="/images/GYM.jpg"
            alt="Gimnasio"
          />
          <Carousel.Caption className="text-whait">
            <h3>Tu lugar ideal</h3>
            <p>Contamos con el espacio y los recursos necesarios para tu mejor version!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrusel"
            src="/images/BOXEO.jpg"
            alt="boxeador y coach"
          />
          <Carousel.Caption className="text-whait">
            <h3>Los mejores instructores</h3>
            <p>Nos adaptamos a todos los niveles!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carrusel w-100"
            src="/images/SPA.jpg"
            alt="servicios de spa"
          />
          <Carousel.Caption className="text-whait">
            <h3>Amplia gama de servisios</h3>
            <p>Pensamos en vos de principio a fin.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;