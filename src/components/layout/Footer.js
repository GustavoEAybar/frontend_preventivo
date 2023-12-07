import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return <div className="bg-dark">
    <Container className="text-light">
      <Row>
        <Col>
          <div>

          </div>
        </Col>
        <Col>
          <figure>
            <image src='./imagenes/ApexGym.jpeg'/>
          </figure>
        </Col>
        <Col>
          <div>
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">Aqui irian logos de marcas chiquitos</Col>
      </Row>
    </Container>
  </div>;
};

export default Footer;
