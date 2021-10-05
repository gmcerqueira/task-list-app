import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Clipboard } from 'react-feather';

import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const NavBar = () => {
  const { User } = useContext(UserContext);
  console.log(User);
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Clipboard className="me-2" size={30} />
          Tasks
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {User.email ? (
              <>
                Signed in as:
                <span className="ms-2 text-decoration-underline text-white ">{`${User.firstName} ${User.lastName}`}</span>
              </>
            ) : (
              ''
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
