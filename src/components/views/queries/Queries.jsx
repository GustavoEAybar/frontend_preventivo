import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const Queries = () => {
  return (
    <div>
      <Form>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control
              type="email"
              placeholder="Apex Gym"
              maxLength={200}
              minLength={7}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Direccion de email</Form.Label>
            <Form.Control
              type="email"
              placeholder="apex_gym@gmail.com"
              maxLength={50}
              minLength={10}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ingrese aqui su consulta</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Aqui va tu consulta..."
              maxLength={200}
              minLength={1}
              required
            />
          </Form.Group>
        </Col>
        <div className=" text-center">
          <Button
            variant="primary"
            type="submit"
            className="bg-info border-0"
            required
          >
            <strong>Enviar consulta</strong>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Queries;
