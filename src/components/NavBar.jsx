import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Clipboard } from 'react-feather';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const NavBar = () => {
  const { User, signOut } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Link to="/" className="d-flex align-items-center navbar-brand">
          <Clipboard className="me-2" size={30} />
          Tasks
        </Link>
        {User.email ? (
          <Navbar.Text>
            Signed in as:
            <span className="ms-2 text-decoration-underline text-white ">{`${User.firstName} ${User.lastName}`}</span>
            <Button variant="secondary" size="sm" className="ms-2" onClick={signOut}>
              Sign out
            </Button>
          </Navbar.Text>
        ) : (
          <Nav.Item className="d-flex">
            <Link to="/" className="me-2 btn btn-secondary">
              Login
            </Link>
            <Link to="/signup" className="me-2 btn btn-success">
              Sign up
            </Link>
          </Nav.Item>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
