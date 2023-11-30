import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProduct = ({ service }) => {
  return (
    <div>
      <Card className="my-4">
        <Card.Img className="img-fluid" variant="top" src={service?.image} />
        <Card.Body>
          <div className="d-flex align-items-center justifu-content-between mb-2">
            <Card.Title className="m-0 text-truncate">
              {service?.nameService}
            </Card.Title>
            <span className="badge bg-dark">Nuevo</span>
          </div>
          <Card.Text>{service?.description}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 ms-4 fs-4">$ {service?.price}</p>
            <Link
              to={`/services/buy/${service?._id}`}
              className="btn btn-primary"
            >
              Adquirir
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
