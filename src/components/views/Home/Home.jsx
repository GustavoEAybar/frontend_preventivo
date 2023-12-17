/* eslint-disable array-callback-return */
import { Button, Col, Container, Row } from "react-bootstrap";
import CardService from "../services/cardService/CardService";

import { useState } from "react";
import CardProduct from "../products/cardProduct/CardProduct";
import CardUser from "../users/cardUser/CardUser";
import Sponsors from "./sponsors/Sponsors";

const Home = ({ information, getApi }) => {
  const [cardInf, setCardInf] = useState();

  const representacion = (solicitud) => {
    if (solicitud === "users") {
      return <CardUser users={information} />;
    } else if (solicitud === "products") {
      return <CardProduct products={information} />;
    } else {
      return <CardService services={information} />;
    }
  };

  return (
    <div className="d-flex flex-column">
          
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={10} lg={10} >
            <Container className="m-1 d-flex justify-content-around ">
              <Row>
                <Col xs={4} md={4} lg={4}>
                  <Button className="m-0 px-4 py-2 background border border-0"
                    onClick={() => {
                      setCardInf("services");
                      getApi("services");
                    }}
                  >
                    <strong>Servicios</strong>
                  </Button>
                </Col>
                <Col xs={4} md={4} lg={4}>
                  <Button className="m-0 px-3 py-2 background border border-0"
                    onClick={() => {
                      setCardInf("products");
                      getApi("products");
                    }}
                  >
                    <strong>Productos</strong>
                  </Button>
                </Col>
                <Col xs={4} md={4} lg={4}>
                  <Button className="m-0 px-3 py-2 background border border-0"
                    onClick={() => {
                      setCardInf("users");
                      getApi("users");
                    }}
                  >
                    <strong>Profesores</strong>
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container className="py-5 d-flex justify-content-center">{representacion(cardInf)}</Container>
          </Col>
          <Col  className="d-none d-sm-block" xs={0} md={2} lg={2}>
            <Sponsors/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
