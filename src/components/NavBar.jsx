import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Clipboard } from 'react-feather';

import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const NavBar = () => {
  const { User } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Clipboard className="me-2" size={30} />
          Tasks
        </Navbar.Brand>
        <Navbar.Text>
          {User.email ? (
            <>
              Signed in as:
              <span className="ms-2 text-decoration-underline text-white ">{`${User.firstName} ${User.lastName}`}</span>
            </>
          ) : (
            <Button variant="secondary" href="/">Login</Button>
          )}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
