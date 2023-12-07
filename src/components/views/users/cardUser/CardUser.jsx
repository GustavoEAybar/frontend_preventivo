import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const CardUser = (users) => {
    return (
        <div>
        {users?.length !== 0 ? (
          <Row>
            {users?.map((user) => (
              user.roll !== "usuario" &&
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
                        {user?.nameuser} + {' '} + {user?.lastNameUser}
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