import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { UserContext } from '../context/UserProvider';
import '../styles/ConnectionStats.css';

const ConnectionStats = () => {
  const { Connection } = useContext(UserContext);
  return (
    <div className="connection">
      Data base
      {Connection ? (
        <CheckOutlinedIcon className="connection-ok" />
      ) : (
        <Spinner animation="grow" variant="success" />
      )}
    </div>
  );
};

export default ConnectionStats;
