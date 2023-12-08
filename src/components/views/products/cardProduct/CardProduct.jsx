import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardProduct = ({ products }) => {
    return (
        <div>
        {products?.length !== 0 ? (
          <Row>
            {products?.map((product) => (
              <Col xl={3} lg={4} md={6} key={product?._id}>
                <Card className="my-4">
                  <img
                    className="img-fluid"
                    variant="top"
                    src={product?.image}
                    alt='imagen de un producto'
                  />
                  <Card.Body>
                    <div className="d-flex align-items-center justifu-content-between mb-2">
                      <Card.Title className="m-0 text-truncate">
                        {product?.nameProduct}
                      </Card.Title>
                      <span className="badge bg-dark">Nuevo</span>
                    </div>
                    <Card.Text>{product?.category}</Card.Text>
                    <Card.Text>{product?.type}</Card.Text>
                    <Card.Text>{product?.size}</Card.Text>
                    <Card.Text>{product?.weight}</Card.Text>
                    <Card.Text>{product?.description}</Card.Text>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 ms-4 fs-4">$ {product?.stock}</p>
                      <p className="mb-0 ms-4 fs-4">$ {product?.price}</p>
                      <Link
                        to={`/products/buy/${product?._id}`}
                        className="btn btn-primary"
                      >
                        Adquirir
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