import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from 'react-bootstrap/Navbar';
import { Check } from 'react-feather';

import { UserContext } from '../context/UserProvider';
import '../styles/ConnectionStats.css';

const ConnectionStats = () => {
  const { Connection } = useContext(UserContext);
  return (
    <Navbar
      fixed="bottom"
      className="d-flex align-items-center justify-content-center text-uppercase fw-bold"
    >
      <span className="me-2">Data base</span>
      {Connection ? (
        <Check size={32} color="green" />
      ) : (
        <Spinner animation="grow" variant="success" />
      )}
    </Navbar>
  );
};

export default ConnectionStats;
