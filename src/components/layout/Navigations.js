import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Navigations = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button className='border border-3 border-white rounded m-1 p-1'>registrarme</Button>
          <Button className='border border-3 border-white rounded m-1 p-1'>iniciar</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigations;
