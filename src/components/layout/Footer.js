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
            <img src='./imagenes/ApexGym.jpg' alt="logo de apex"/>
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
