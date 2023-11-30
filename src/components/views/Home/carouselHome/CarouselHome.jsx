import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mercadofitness.com/ar/wp-content/uploads/2023/02/El-gimnasio-CARD-cumple-tres-meses-en-Ciudad-de-la-Costa-Uruguay.jpeg"
            alt="Gimnasio"
          />
          <Carousel.Caption className="text-danger">
            <h3>Tu lugar ideal</h3>
            <p>Contamos con el espacio y los recursos necesarios para tu mejor version!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-photo/male-boxer-learning-coach-600nw-635519093.jpg"
            alt="boxeador y coach"
          />
          <Carousel.Caption className="text-danger">
            <h3>Los mejores instructores</h3>
            <p>Nos adaptamos a todos los niveles!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1336348648/es/foto/masaje-de-pareja-en-el-balneario-hermosa-pareja-recibiendo-un-masaje-de-espalda-al-aire-libre.jpg?s=612x612&w=0&k=20&c=BQq84VCR9PvQBcZ7gr7R2SESOuu-0POtHdlwmPx0ABM="
            alt="servicios de spa"
          />
          <Carousel.Caption className="text-danger">
            <h3>Amplia gama de servisios</h3>
            <p>Pensamos en vos de principio a fin.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;