import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Navigations = ({ loggedUser, setLoggedUser}) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user-tokem');
    setLoggedUser({});
    navigate('/');
  };

  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='logo' href="/">ApexGym</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto color-nav">
              <Nav.Link className='nav-link' to='/'>Home</Nav.Link>
              {loggedUser?.token ? (
                <>
                  <Button className='border border-3 border-white rounded m-1 p-1' onClick={logout}>Cerrar sesion</Button>
                  <Link className='nav-link' to='/service/table'>Servicios</Link>
                </>
              ) : (
                <Link className='nav-link' to='/users/login'>
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
