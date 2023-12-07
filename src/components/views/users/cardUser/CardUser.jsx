import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardUser = (users) => {
    return (
        <div>
        {users?.length !== 0 ? (
          <Row>
            {users?.map((user) => (
              <Col xl={3} lg={4} md={6} key={user?._id}>
                <Card className="my-4">
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={user?.image}
                  />
                  <Card.Body>
                    <div className="d-flex align-items-center justifu-content-between mb-2">
                      <Card.Title className="m-0 text-truncate">
                        {user?.nameuser}
                      </Card.Title>
                      <span className="badge bg-dark">Nuevo</span>
                    </div>
                    <Card.Text>{user?.description}</Card.Text>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 ms-4 fs-4">$ {user?.price}</p>
                      <Link
                        to={`/users/buy/${user?._id}`}
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
          <div className="no-users-found d-flwz align-items-center justify-content-center">
            <h1>🧘‍♀️ Usuarios no encontrados 🧘‍♀️</h1>
          </div>
        )}
      </div>
    );
};

export default CardUser;