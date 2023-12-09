import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./logo.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-light background">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="m-2" xs={6} md={4}>
              <p>
                <strong>Sobre nosotros</strong>
              </p>
              <ul>
                <li>
                <Link className="nav-link" to="/">
                Home
              </Link>
                </li>
                <li>
                <Link className="nav-link" to="/">
                sobre nosotros
              </Link>
                </li>
                <li>
                <Link className="nav-link" to="/">
                contactanos
              </Link>
                </li>
              </ul>
            </Col>
            <Col className="d-flex justify-content-center flex-column m-2 text-center"xs={12} md={4}>
              <img
                src="/ApexGym.jpg"
                alt="logo de apex"
                className="img-fluid rounded float-start logo mx-auto"
              />
              <p className="text-center">
                <strong>Apex Gym</strong>
              </p>
              <p>© 2023. All Rights Reserved.</p>
            </Col>
            <Col className="m-2" xs={6} md={4}>
              <p>
                <strong>Contacta con nosotros:</strong>
              </p>
              <div></div>
            </Col>
          </Row>
      </Container>
      <div>
      <img
                src="/ApexGym.jpg"
                alt="logo de apex"
                className="img-fluid rounded float-start logo mx-auto"
              />
      <img
                src="/ApexGym.jpg"
                alt="logo de apex"
                className="img-fluid rounded float-start logo mx-auto"
              />
      <img
                src="/ApexGym.jpg"
                alt="logo de apex"
                className="img-fluid rounded float-start logo mx-auto"
              />
      <img
                src="/ApexGym.jpg"
                alt="logo de apex"
                className="img-fluid rounded float-start logo mx-auto"
              />
      </div>
    </div>
  );
};

export default Footer;
