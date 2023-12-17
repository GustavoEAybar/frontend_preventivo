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

const Navigations = ({ loggedUser, setLoggedUser }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user-tokem");
    setLoggedUser({});
    navigate("/");
  };

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
                  <img
                    src="/ApexGym.jpg"
                    alt="logo de apex"
                    className="img-fluid rounded float-start w-150 h-auto logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/contacts">Contactos</Nav.Link>
                  <Nav.Link href="/aboutUs">Nosotros</Nav.Link>
                  {loggedUser ? (
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
                        href="#action5"
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
