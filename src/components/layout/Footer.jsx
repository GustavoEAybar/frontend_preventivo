import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./logo.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-light background">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <p>
              <strong>Conocenos</strong>
            </p>
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/aboutUs">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contacts">
                  Contactanos
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="d-flex justify-content-center flex-column m-2 text-center">
            <img
              src="images/ApexGym.jpg"
              alt="logo de apex"
              className="img-fluid rounded float-start logo mx-auto"
            />
            <p className="text-center">
              <strong>Apex Gym</strong>
            </p>
            <p>© 2023. All Rights Reserved.</p>
          </Col>
          <Col className="d-flex flex-column">
            <p>
              <strong>Contactos:</strong>
            </p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <strong>FACEBOOK</strong>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <strong>INSTAGRAM</strong>
            </a>
            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <strong>TELEGRAM</strong>
            </a>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <strong>WHATSAPP</strong>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <strong>YOUTUBE</strong>
            </a>
            <a
              href="https://www.tiktok.com/es/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <strong>TIKTOK</strong>
            </a>
            <a
              href="https://twitter.com/?lang=es"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <strong>X</strong>
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-light d-flex justify-content-center">
        <div className="d-flex align-content-center flex-wrap">
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/thenorthface.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/clumbia.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/fila.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/kapa.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/newbalance.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/reebok.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/underarmour.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/umbro.jpg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
          <svg width="100" height="80" className="m-1">
            <image
              href="/images/Adidas.jpeg"
              height="100"
              width="100"
              alt="logo de apex"
              className="img-fluid rounded float-start"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
