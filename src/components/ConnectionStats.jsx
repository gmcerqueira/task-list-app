import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const ConnectionStats = () => {
  const { Connection } = useContext(UserContext);
  return <div>{`Data base connection: ${Connection ? 'ok' : 'waiting'}`}</div>;
};

export default ConnectionStats;
