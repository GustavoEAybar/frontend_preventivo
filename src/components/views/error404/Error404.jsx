import { Link } from "react-router-dom";
import "./error404.css";
import { Col, Container, Image, Row } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container>
      <div>
      {console.log('estoy en error 404')}
      </div>

      <Row>
        <Col>
          <Image src="../../layout/Error404.png" alt="error 404" className="img-thumbnail animate__animated anumate__fadeInLeft"/>
        </Col>
        <Col>
          <div className="text-center">
            <h2>It seems there was an error ☹ back to home!</h2>
            <Link to='/' className="btn-red my-4 text-decoration-none text-center">Home</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;