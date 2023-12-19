import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardProduct = ({ products }) => {
    return (
        <div>
        {products?.length !== 0 ? (
          <Row>
            {products?.map((product) => (
              <Col md={12} lg={6} xl={4} key={product?._id}>
                <Card className="my-4">
                  <img
                    className="img-fluid"
                    variant="top"
                    src={product?.image}
                    alt='imagen de un producto'
                  />
                  <Card.Body className="backgroundMain text-white">
                    <div className="d-flex align-items-center justifu-content-between mb-2">
                      <Card.Title className="m-0 text-truncate">
                        {product?.nameProduct}
                      </Card.Title>
                    </div>
                    <Card.Text>{product?.type}</Card.Text>
                    <Card.Text>{product?.size}</Card.Text>
                    <Card.Text>{product?.weight}</Card.Text>
                    <Card.Text>{product?.description}</Card.Text>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 ms-4 fs-4">$ {product?.price}</p>
                      <Link
                        to={`/products/buy/${product?._id}`}
                        className="btn btn-warning text-white"
                      >
                        <strong>Adquirir</strong>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-products-found d-flwz align-items-center justify-content-center">
            <h1>🤸‍♀️ Productos no encontrados 🤸‍♀️</h1>
          </div>
        )}
      </div>
    );
};

export default CardProduct;