import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return <div className="bg-dark">
    <Container className="text-light">
      <Row>
        <Col>datos del gimnacio</Col>
        <Col>Aqui iria el logo</Col>
        <Col>contactos</Col>
      </Row>
      <Row>
        <Col className="text-center">Aqui irian logos de marcas chiquitos</Col>
      </Row>
    </Container>
  </div>;
};

export default Footer;
