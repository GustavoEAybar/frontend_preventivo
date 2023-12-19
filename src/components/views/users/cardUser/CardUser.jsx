import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const CardUser = ({ users }) => {
    return (
        <div>
        {users?.length !== 0 ? (
          <Row>
            {users?.map((user) => (
              user.roll === "profesor" &&
              <Col md={12} lg={6} xl={4} key={user?._id}>
                <Card className="my-4">
                  <img
                    className="img-fluid"
                    variant="top"
                    src={user?.image}
                    alt='imagen de un usuario'
                  />
                  <Card.Body className="backgroundMain text-white">
                    <div className="d-flex align-items-center justifu-content-between mb-2">
                      <Card.Title className="m-0 text-truncate">
                        {user?.nameuser}
                      </Card.Title>
                    </div>
                    <Card.Text>{user?.description}</Card.Text>
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