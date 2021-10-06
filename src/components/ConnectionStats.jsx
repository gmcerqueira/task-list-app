import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Check } from 'react-feather';

import { UserContext } from '../context/UserProvider';
import '../styles/ConnectionStats.css';

const ConnectionStats = () => {
  const { Connection } = useContext(UserContext);
  return (
    <div>
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
