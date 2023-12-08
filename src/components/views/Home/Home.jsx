/* eslint-disable array-callback-return */
import { Button, Col, Container, Row } from "react-bootstrap";
import CardService from "../services/cardService/CardService";
import CarouselHome from "./carouselHome/CarouselHome";
import { useState } from "react";
import CardProduct from "../products/cardProduct/CardProduct";
import CardUser from "../users/cardUser/CardUser";

const Home = ({ information, getApi }) => {

  const [cardInf, setCardInf] = useState();

  const representacion = (solicitud) => {
    if (solicitud === 'users') {
      return <CardUser users={information}/>
    }else if (solicitud === 'products'){
      return <CardProduct products={information} />
    }else {
      return <CardService services={information}/>
    }
  };

  return (
    <div>
      <CarouselHome />
      <Container>
        <Row>
          <Col>
            <Button onClick={()=>{setCardInf('services'); getApi('services')}}>Servicios</Button>
          </Col>
          <Col>
            <Button onClick={()=>{setCardInf('products'); getApi('products')}}>Productos</Button>
          </Col>
          <Col>
            <Button onClick={()=>{setCardInf('users'); getApi('users')}}>Profesores</Button>
          </Col>
        </Row>
      </Container>
        <hr />
      <Container className="py-5">
        {representacion (cardInf)}
      </Container>
    </div>
  );
};

export default Home;