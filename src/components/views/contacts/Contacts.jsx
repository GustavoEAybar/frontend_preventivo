import { Col, Container, Row } from "react-bootstrap";
import Queries from "../queries/Queries";

const Contacts = () => {
  return (
    <div>
      <Container className="text-light">
        <Row>
          <h2  className="d-flex justify-content-center m-3 bg-info rounded" >Comunicate con nosotros</h2>
        </Row>
        <Row >
          <Col className="text-center">
            <svg width="80" height="80" className="m-1">
              <image
                href="/images/whatsapp.png"
                height="100"
                width="80"
                alt="logo de whatsapp"
                className="img-fluid rounded float-start"
              />
            </svg>
            <h3>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                <strong>3812334455</strong>
              </a>
            </h3>
            <svg width="80" height="80" className="m-1">
              <image
                href="/images/twitter.png"
                height="100"
                width="80"
                alt="logo de apex"
                className="img-fluid rounded float-start"
              />
            </svg>
            <h3>
              <a
                href="https://twitter.com/?lang=es"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                <strong>@Apex_Gym</strong>
              </a>
            </h3>
          </Col>
          <Col className="text-center">
            <svg width="80" height="80" className="m-1">
              <image
                href="/images/instagram.png"
                height="100"
                width="80"
                alt="logo de whatsapp"
                className="img-fluid rounded float-start"
              />
            </svg>
            <h3>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                <strong>@Apex_Gym</strong>
              </a>
            </h3>
            <svg width="80" height="80" className="m-1">
              <image
                href="/images/facebook.png"
                height="100"
                width="80"
                alt="logo de apex"
                className="img-fluid rounded float-start"
              />
            </svg>
            <h3>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                <strong>@Apex_Gym</strong>
              </a>
            </h3>
          </Col>
          <Col className="text-center">
            <svg width="80" height="80" className="m-1">
              <image
                href="/images/gmail.png"
                height="100"
                width="80"
                alt="logo de whatsapp"
                className="img-fluid rounded float-start"
              />
            </svg>
            <h3>
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                <strong>apex_gym@gmail.com</strong>
              </a>
            </h3>
            <svg width="80" height="80" className="m-1">
              <image
                href="/images/linkedin.png"
                height="100"
                width="80"
                alt="logo de apex"
                className="img-fluid rounded float-start"
              />
            </svg>
            <h3>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                <strong>@Apex_Gym</strong>
              </a>
            </h3>
          </Col>
        </Row>
        <hr />
        <Row>
        <h2  className="d-flex justify-content-center m-3 bg-info rounded" >Dejanos tu consulta por aqui</h2>
          <Queries />
        </Row>
        <Row>
        <h2  className="d-flex justify-content-center m-3 bg-info rounded" >Visita nuestra sucursal!</h2>
          <Col className="d-flex justify-content-center m-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14240.423817493842!2d-65.22562092221587!3d-26.836582102869006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1702962596523!5m2!1ses-419!2sar"
              title="Mapa de Apex Gym"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="m-2"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
