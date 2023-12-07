/* eslint-disable array-callback-return */
import { Button, Col, Container, Row } from "react-bootstrap";
import CardService from "../services/cardService/CardService";
import CarouselHome from "./carouselHome/CarouselHome";
import { useState } from "react";
import CardProduct from "../products/cardProduct/CardProduct";
import CardUser from "../users/cardUser/CardUser";

const Home = ({ information, getApi }) => {

  const [cardInf, setCardInf] = useState(<CardService servives={information}/>);

  return (
    <div>
      <CarouselHome />
      <Container>
        <Row>
          <Col>
            <Button onClick={()=>{setCardInf(<CardService servives={information}/>); getApi('services')}}>Servicios</Button>
          </Col>
          <Col>
            <Button onClick={()=>{setCardInf(<CardProduct products={information} />); getApi('products')}}>Productos</Button>
          </Col>
          <Col>
            <Button onClick={()=>{setCardInf(<CardUser users={information}/>); getApi('users')}}>Profesores</Button>
          </Col>
        </Row>
      </Container>
        <hr />
      <Container className="py-5">
        {cardInf}
      </Container>
    </div>
  );
};

export default Home;