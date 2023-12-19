import { Link } from "react-router-dom";
import "./error404.css";
import { Col, Container, Row } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <svg width="850" height="550" className="mt-5 bg-warning">
            <image href="/images/Error404.png"
              height="550"
              width="850"
              alt="error 404"
              className="img-fluid rounded float-start"/>
          </svg>
        </Col>
        <Col>
          <div className="text-center text-light">
            <h2>NO SIEMPRE ES BUENO IR AL FALLO!</h2>
            <Link
              to="/"
              className="btn-red my-4 text-center text-warning"
              style={{ textDecoration: "none" }}
            >
              <strong>VOLVER A LA PAGINA PRINCIPAL</strong>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
