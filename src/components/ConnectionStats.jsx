import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Check } from 'react-feather';

import { UserContext } from '../context/UserProvider';
import '../styles/ConnectionStats.css';

const ConnectionStats = () => {
  const { Connection } = useContext(UserContext);
  return (
    <div className="connection">
      Data base
      {Connection ? (
        <Check className="connection-ok" />
      ) : (
        <Spinner animation="grow" variant="success" />
      )}
    </div>
  );
};

export default ConnectionStats;
