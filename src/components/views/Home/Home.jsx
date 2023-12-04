/* eslint-disable array-callback-return */
import { Col, Container, Row } from "react-bootstrap";
import CardService from "./cardService/CardService";
import CarouselHome from "./carouselHome/CarouselHome";

const Home = ({ services }) => {
  return (
    <div>
      <CarouselHome />
      <Container className="py-5">
        <h1>Servicios</h1>
        <hr />
        {services?.length !== 0 ? 
          <Row>
            {services?.map((service) => {
              <Col xl={3} lg={4} md={6} key={service?._id}>
                <CardService service={service} />
              </Col>;
            })}
          </Row>
         : 
          <div className="no-services-found d-flwz align-items-center justify-content-center">
            <h1>🏋️‍♀️ Servicios no encontrados 🏋️‍♀️</h1>
          </div>
        }
      </Container>
    </div>
  );
};

export default Home;
