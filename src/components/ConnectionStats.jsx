import { useContext } from 'react';
import { MdCloudDone, MdCloudDownload } from 'react-icons/md';
import { UserContext } from '../context/UserProvider';
import '../styles/ConnectionStats.css';

const ConnectionStats = () => {
  const { Connection } = useContext(UserContext);
  return (
    <div className="connection">
      Data base
      {Connection ? <MdCloudDone className="connection-ok" /> : <MdCloudDownload className="no-connection" />}
    </div>
  );
};

export default ConnectionStats;
