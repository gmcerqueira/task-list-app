import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  LinkedIn, GitHub, Email,
} from '@material-ui/icons';

import '../styles/Footer.css';

const Footer = () => (
  <Navbar fixed="bottom" bg="dark" variant="dark" className="p-0 footer">
    <Container className="justify-content-center">
      <Navbar.Text>© Gustavo Cerqueira</Navbar.Text>
      <Nav.Link href="https://github.com/gmcerqueira" target="_blank">
        <GitHub />
      </Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/gmcerqueira/" target="_blank">
        <LinkedIn fontSize="large" />
      </Nav.Link>
      <Nav.Link href="mailto:gmcerqueira@gmail.com" target="_blank">
        <Email fontSize="large" />
      </Nav.Link>
    </Container>
  </Navbar>
);

export default Footer;
