import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './logo.css'

const Navigations = ({ loggedUser, setLoggedUser }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user-tokem");
    setLoggedUser({});
    navigate("/");
  };

  return (
    <div>
      <Navbar className="background" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  href="/">
            <img src="/ApexGym.jpg" alt="logo de apex" className="img-fluid rounded float-start w-150 h-auto logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto color-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {loggedUser?.token ? (
                <>
                  <Link className="nav-link" to="/services/table">
                    Servicios
                  </Link>
                  <Link className="nav-link" to="/products/table">
                    Productos
                  </Link>
                  <Link className="nav-link" to="/users/table">
                    Usuarios
                  </Link>
                  <Button
                    className="border border-3 border-white rounded m-1 p-1"
                    onClick={logout}
                  >
                    Cerrar sesion
                  </Button>
                </>
              ) : (
                <Link className="nav-link" to="/users/login">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigations;
