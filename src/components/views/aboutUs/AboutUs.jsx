import { Col, Container, Row } from "react-bootstrap";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2 className="d-block p-2 text-bg-warning text-center">Autor</h2>
            <svg
              width="150"
              height="200"
              className="border border-warning  border-5 rounded mx-auto d-block m-3"
            >
              <image
                href="/images/perfil.jpg"
                height="200"
                width="150"
                alt="logo de apex"
                className="img-fluid rounded float-start"
              />
            </svg>
          </div>
          <div>
          <h2 className="d-block p-2 text-bg-warning text-center">Sobre mi</h2>
          <p className="text-light text-break fs-3 fw-bold lh-base"></p>
          </div>
        </Col>
        <Col>
          <div>
          <h2 className="d-block p-2 text-bg-warning text-center">Motivaciones</h2>
          <p className="text-light text-break fs-3 fw-bold lh-base"></p>
          </div>
          <div>
          <h2 className="d-block p-2 text-bg-warning text-center">Metas</h2>
          <p className="text-light text-break fs-3 fw-bold lh-base"></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
