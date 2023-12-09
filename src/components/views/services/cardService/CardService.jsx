import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardService = ({ services }) => {
  return (
    <div>
      {services?.length !== 0 ? (
        <Row>
          {services?.map((service) => (
            <Col xl={3} lg={4} md={6} key={service?._id}>
              <Card className="my-4">
                <img
                  className="img-fluid"
                  alt="imagen de servicio"
                  src={service?.image}
                />
                <Card.Body  className="backgroundMain text-white">
                  <div className="d-flex align-items-center justifu-content-between mb-2">
                    <span className="badge bg-warning mx-2">Nuevo</span>
                    <Card.Title className="m-0 text-truncate">
                      {service?.nameService}
                    </Card.Title>
                  </div>
                  <Card.Text>{service?.description}</Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 ms-4 fs-4">$ {service?.price}</p>
                    <Link
                      to={`/services/buy/${service?._id}`}
                      className="btn btn-warning text-white"
                    >
                      <strong>Mas info.</strong>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="no-services-found d-flwz align-items-center justify-content-center">
          <h1>🏋️‍♀️ Servicios no encontrados 🏋️‍♀️</h1>
        </div>
      )}
    </div>
  );
};

export default CardService;
