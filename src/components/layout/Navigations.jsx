/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./logo.css";
import CarouselHome from "../views/Home/carouselHome/CarouselHome";
import { useEffect } from "react";


const Navigations = ({ loggedUser, setLoggedUser }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user-token");
    setLoggedUser({});
    navigate("/");
  };

  useEffect(()=>{
    setLoggedUser(JSON.parse(localStorage.getItem("user-token")));
  },[]);

  return (
    <div className="bg-dark">
      <CarouselHome />
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="background"
          data-bs-theme="dark"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <svg width="150" height="75">
                <image
                  href="/images/ApexGym.jpg"
                  height="75"
                  width="150"
                  alt="logo de apex"
                  className="img-fluid rounded float-start w-150 h-auto logo"
                />
              </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="background"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <svg width="150" height="75">
                <image
                  href="/images/ApexGym.jpg"
                  height="75"
                  width="150"
                  alt="logo de apex"
                  className="img-fluid rounded float-start w-150 h-auto logo"
                />
              </svg>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link to="/">Inicio</Nav.Link>
                  <Nav.Link to="/contacts">Contactos</Nav.Link>
                  <Nav.Link to="/aboutUs">Nosotros</Nav.Link>
                  {loggedUser?.token ? (
                    <NavDropdown title="Edición">
                      <Nav.Link href="/users/table" className="ps-3">
                        Usuarios
                      </Nav.Link>
                      <Nav.Link href="/products/table" className="ps-3">
                        Productos
                      </Nav.Link>
                      <Nav.Link href="/services/table" className="ps-3">
                        Servicios
                      </Nav.Link>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="/"
                        className="m-1 ps-3"
                        onClick={logout}
                      >
                        Cerrar sesion
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Nav.Link href="/users/login">Iniciar sesion</Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Navigations;
