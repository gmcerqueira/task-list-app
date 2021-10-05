import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Check } from 'react-feather';

import { UserContext } from '../context/UserProvider';
import '../styles/ConnectionStats.css';

const ConnectionStats = () => {
  const { Connection } = useContext(UserContext);
  return (
    <div className="d-flex align-items-center text-uppercase fw-bold">
      <span className="me-2">Data base</span>
      {Connection ? (
        <Check size={32} color="green" />
      ) : (
        <Spinner animation="grow" variant="success" />
      )}
    </div>
  );
};

export default ConnectionStats;
