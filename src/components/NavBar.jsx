import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Clipboard } from 'react-feather';

import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const NavBar = () => {
  const { User, signOut } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Clipboard className="me-2" size={30} />
          Tasks
        </Navbar.Brand>
        {User.email ? (
          <Navbar.Text>
            Signed in as:
            <span className="ms-2 text-decoration-underline text-white ">{`${User.firstName} ${User.lastName}`}</span>
            <Button variant="secondary" size="sm" href="/" className="ms-2" onClick={signOut}>
              Sign out
            </Button>
          </Navbar.Text>
        ) : (
          <Nav.Item>
            <Button variant="secondary" href="/" className="me-2">
              Login
            </Button>
            <Button variant="success" href="/signup">
              Sign up
            </Button>
          </Nav.Item>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
